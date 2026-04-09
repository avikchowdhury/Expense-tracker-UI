import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserManualService {
  constructor(private readonly http: HttpClient) {}

  /** Downloads the user manual as a PDF blob – no print dialog, same flow as Export Excel. */
  async downloadPdf(): Promise<void> {
    const htmlText = await firstValueFrom(
      this.http.get('assets/help/expense-tracker-user-manual.html', {
        responseType: 'text',
      }),
    );

    // Render inside a hidden iframe so the manual's own CSS is applied correctly
    const iframe = document.createElement('iframe');
    iframe.style.cssText =
      'position:fixed;left:-10000px;top:0;width:900px;height:1200px;border:none;visibility:hidden;';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentDocument!;
    iframeDoc.open();
    iframeDoc.write(htmlText);
    iframeDoc.close();

    // Give fonts / images a moment to settle
    await new Promise<void>((resolve) => setTimeout(resolve, 600));

    // Hide action buttons so they don't appear in the PDF
    const heroActions = iframeDoc.querySelector(
      '.hero-actions',
    ) as HTMLElement | null;
    if (heroActions) heroActions.style.display = 'none';

    iframeDoc.body.style.overflow = 'visible';
    const main =
      (iframeDoc.querySelector('main') as HTMLElement) ?? iframeDoc.body;

    const canvas = await html2canvas(main, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      windowWidth: 900,
      backgroundColor: '#ffffff',
      scrollX: 0,
      scrollY: 0,
    });

    document.body.removeChild(iframe);

    // Split the captured canvas into A4 pages
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageW = 210; // mm
    const pageH = 297; // mm
    const imgW = canvas.width;
    const imgH = canvas.height;
    const scale = pageW / imgW; // canvas-px → mm
    const totalPdfH = imgH * scale;

    let posY = 0;
    let firstPage = true;

    while (posY < totalPdfH) {
      if (!firstPage) pdf.addPage();
      firstPage = false;

      const srcY = posY / scale;
      const sliceH = Math.min(pageH / scale, imgH - srcY);

      const slice = document.createElement('canvas');
      slice.width = imgW;
      slice.height = Math.ceil(sliceH);
      slice
        .getContext('2d')!
        .drawImage(canvas, 0, srcY, imgW, sliceH, 0, 0, imgW, sliceH);

      pdf.addImage(
        slice.toDataURL('image/jpeg', 0.88),
        'JPEG',
        0,
        0,
        pageW,
        sliceH * scale,
      );
      posY += pageH;
    }

    pdf.save('User Manual.pdf');
  }
}
