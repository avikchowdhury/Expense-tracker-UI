import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AiAssistantService } from '../../../services/ai-assistant.service';
import { AiChatMessage } from '../../../models';

@Component({
  selector: 'app-ai-chat-panel',
  templateUrl: './ai-chat-panel.component.html',
  styleUrls: ['./ai-chat-panel.component.scss']
})
export class AiChatPanelComponent implements AfterViewChecked {
  readonly starterPrompts = [
    'How much budget risk do I have right now?',
    'Which subscriptions should I review first?',
    'How can I reduce my budget risk?',
    'Summarize my latest receipt activity.'
  ];

  messages: AiChatMessage[] = [
    {
      role: 'assistant',
      content: 'Ask about budgets, subscriptions, receipt activity, or where your spend is drifting. I answer from your tracker data, not guesses.'
    }
  ];

  prompt = '';
  loading = false;
  private shouldScrollToBottom = true;

  @ViewChild('messageList')
  private messageListRef?: ElementRef<HTMLDivElement>;

  constructor(private aiAssistantService: AiAssistantService) {}

  ngAfterViewChecked(): void {
    if (!this.shouldScrollToBottom || !this.messageListRef) {
      return;
    }

    const container = this.messageListRef.nativeElement;
    container.scrollTop = container.scrollHeight;
    this.shouldScrollToBottom = false;
  }

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
    this.shouldScrollToBottom = true;
    this.prompt = '';
    this.loading = true;

    this.aiAssistantService.sendMessage({ message }).subscribe({
      next: (response) => {
        this.messages = [
          ...this.messages,
          {
            role: 'assistant',
            content: response.reply,
            createdAt: response.generatedAt,
            response
          }
        ];
        this.shouldScrollToBottom = true;
      },
      error: () => {
        this.messages = [
          ...this.messages,
          {
            role: 'assistant',
            content: 'I could not reach the AI assistant just now. Try again after the API is available.'
          }
        ];
        this.shouldScrollToBottom = true;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  trackByMessage(index: number, message: AiChatMessage): string {
    return `${message.role}-${message.createdAt || index}-${message.content.slice(0, 24)}`;
  }
}
