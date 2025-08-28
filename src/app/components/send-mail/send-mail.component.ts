import { Component } from '@angular/core';

@Component({
  selector: 'app-send-mail',
  imports: [],
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
