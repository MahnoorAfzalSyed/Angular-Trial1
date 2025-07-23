import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="send.emit()" class="send-btn">Send</button>
  `
})
export class SendButtonComponent {
  @Output() send = new EventEmitter<void>();
}