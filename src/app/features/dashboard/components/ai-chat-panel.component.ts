import { Component } from '@angular/core';
import { AiAssistantService } from '../../../services/ai-assistant.service';
import { AiChatMessage } from '../../../models';

@Component({
  selector: 'app-ai-chat-panel',
  templateUrl: './ai-chat-panel.component.html',
  styleUrls: ['./ai-chat-panel.component.scss']
})
export class AiChatPanelComponent {
  readonly starterPrompts = [
    'What category is growing fastest this month?',
    'How can I reduce my budget risk?',
    'Summarize my latest receipt activity.'
  ];

  messages: AiChatMessage[] = [
    {
      role: 'assistant',
      content: 'Ask about overspending, recent vendors, or where you can tighten your budget. I will answer using your tracker data.'
    }
  ];

  prompt = '';
  loading = false;

  constructor(private aiAssistantService: AiAssistantService) {}

  usePrompt(prompt: string): void {
    this.prompt = prompt;
    this.submit();
  }

  submit(): void {
    const message = this.prompt.trim();
    if (!message || this.loading) {
      return;
    }

    this.messages = [...this.messages, { role: 'user', content: message }];
    this.prompt = '';
    this.loading = true;

    this.aiAssistantService.sendMessage({ message }).subscribe({
      next: (response) => {
        this.messages = [
          ...this.messages,
          { role: 'assistant', content: response.reply, createdAt: response.generatedAt }
        ];
      },
      error: () => {
        this.messages = [
          ...this.messages,
          {
            role: 'assistant',
            content: 'I could not reach the AI assistant just now. Try again after the API is available.'
          }
        ];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
