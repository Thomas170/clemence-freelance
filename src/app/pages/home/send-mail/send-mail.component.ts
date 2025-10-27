import { Component } from '@angular/core';
import { UiButtonDirective } from "../../../shared/directives/ui-button.directive";

@Component({
  selector: 'app-send-mail',
  standalone: true,
  imports: [UiButtonDirective],
  templateUrl: './send-mail.component.html',
  styleUrl: './send-mail.component.css'
})
export class SendMailComponent {
  openMail() {
    const email = encodeURIComponent('clemence.jomain@icloud.com')
    const subject = encodeURIComponent('Demande de contact');

    window.location.href = "mailto:" + email + "?subject=" + subject;
  }
}
