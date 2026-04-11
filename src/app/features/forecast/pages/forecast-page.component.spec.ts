import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { of, Subject, throwError } from 'rxjs';
import {
  AiAssistantService,
  WhatIfForecast,
  SpendingForecast,
} from '../../../services/ai-assistant.service';
import { ForecastPageComponent } from './forecast-page.component';

describe('ForecastPageComponent', () => {
  let fixture: ComponentFixture<ForecastPageComponent>;
  let component: ForecastPageComponent;
  let aiService: { getForecast: jest.Mock; getWhatIfForecast: jest.Mock };

  const forecast: SpendingForecast = {
    currentSpend: 300,
    projectedMonthEnd: 620,
    dailyAverage: 20,
    daysElapsed: 15,
    daysRemaining: 15,
    trend: 'warning',
    aiNarrative: 'Keep an eye on dining.',
    budgetAmount: 500,
    topCategory: 'Dining',
    drivers: [
      { category: 'Dining', amount: 220 },
      { category: 'Groceries', amount: 80 },
    ],
    dailyBreakdown: [
      { date: '2026-04-01', amount: 10, isProjected: false },
      { date: '2026-04-02', amount: 20, isProjected: false },
      { date: '2026-04-16', amount: 20, isProjected: true },
    ],
  };

  const whatIfResult: WhatIfForecast = {
    baseProjectedMonthEnd: 620,
    adjustedProjectedMonthEnd: 520,
    netChange: -100,
    trend: 'on-track',
    summary: 'Dining -$100.00 cuts projected spend by $100.00.',
    adjustments: [{ category: 'Dining', deltaAmount: -100 }],
  };

  beforeEach(async () => {
    aiService = {
      getForecast: jest.fn(),
      getWhatIfForecast: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        NoopAnimationsModule,
      ],
      declarations: [ForecastPageComponent],
      providers: [
        {
          provide: AiAssistantService,
          useValue: aiService,
        },
      ],
    }).compileComponents();
  });

  it('loads forecast on init and maps chart heights', () => {
    const response$ = new Subject<SpendingForecast>();
    aiService.getForecast.mockReturnValue(response$.asObservable());

    fixture = TestBed.createComponent(ForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(aiService.getForecast).toHaveBeenCalledWith(false);
    expect(component.loading).toBe(true);

    response$.next(forecast);
    response$.complete();
    fixture.detectChanges();

    expect(component.loading).toBe(false);
    expect(component.loadError).toBe(false);
    expect(component.chartDays).toHaveLength(3);
    expect(component.chartDays[1].barHeight).toBe(100);
    expect(component.chartDays[0].barHeight).toBe(50);
    expect(component.trendLabel).toBe('Approaching limit');
  });

  it('shows an error state when forecast loading fails', () => {
    aiService.getForecast.mockReturnValue(
      throwError(() => new Error('forecast failed')),
    );

    fixture = TestBed.createComponent(ForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.loading).toBe(false);
    expect(component.loadError).toBe(true);
    expect(component.forecast).toBeNull();
    expect(component.chartDays).toEqual([]);
  });

  it('uses force refresh when manual reload is requested', () => {
    aiService.getForecast.mockReturnValue(of(forecast));

    fixture = TestBed.createComponent(ForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    aiService.getForecast.mockClear();
    component.load(true);

    expect(aiService.getForecast).toHaveBeenCalledWith(true);
  });

  it('runs a what-if scenario for the selected category', () => {
    aiService.getForecast.mockReturnValue(of(forecast));
    aiService.getWhatIfForecast.mockReturnValue(of(whatIfResult));

    fixture = TestBed.createComponent(ForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.whatIfCategory = 'Dining';
    component.whatIfAmount = 100;
    component.whatIfMode = 'reduce';
    component.runWhatIf();

    expect(aiService.getWhatIfForecast).toHaveBeenCalledWith([
      { category: 'Dining', deltaAmount: -100 },
    ]);
    expect(component.whatIfResult).toEqual(whatIfResult);
  });
});
