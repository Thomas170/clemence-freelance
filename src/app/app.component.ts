import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { MyServicesComponent } from "./components/my-services/my-services.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SendMailComponent } from "./components/send-mail/send-mail.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    MyServicesComponent,
    AboutMeComponent,
    SendMailComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
