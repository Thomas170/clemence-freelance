import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SendMailComponent } from './send-mail/send-mail.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    MyServicesComponent,
    AboutMeComponent,
    SendMailComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
