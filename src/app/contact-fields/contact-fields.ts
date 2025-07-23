import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-fields',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fields">
      <label>
        To:
        <input type="email" [(ngModel)]="to" (ngModelChange)="emitChange()" />
      </label>

      <label>
        From:
        <input type="email" [(ngModel)]="from" (ngModelChange)="emitChange()" />
      </label>
    </div>
  `
})
export class ContactFieldsComponent {
  to: string = '';
  from: string = '';

  @Output() fieldsChanged = new EventEmitter<{ to: string; from: string }>();

  emitChange() {
    this.fieldsChanged.emit({
      to: this.to,
      from: this.from
    });
  }
}