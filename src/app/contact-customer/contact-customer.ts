import { Component, signal } from '@angular/core';
import { ContactFieldsComponent } from '../contact-fields/contact-fields';
import { SendButtonComponent } from '../send-button/send-button';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-contact-customer',
  standalone: true,
  imports: [ContactFieldsComponent, EditorModule, SendButtonComponent],
  templateUrl: './contact-customer.html'
})
export class ContactCustomerComponent {
  // Use signals for reactivity
  to = signal("");
  from = signal("");
  message = signal("");

  updateFields(fields: { to: string, from: string }) {
    this.to.set(fields.to);
    this.from.set(fields.from);
  }

  handleSend() {
    console.log("Sending message");
    console.log("From:", this.from());
    console.log("To:", this.to());
    console.log("Message:", this.message());
    // TODO: Send via service or API
  }

  updateMessage(content: string) {
    this.message.set(content);
  }
}