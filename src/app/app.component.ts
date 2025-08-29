import { Component } from '@angular/core';
import { HeaderComponent } from "./components/core/header/header.component";
import { HeroSectionComponent } from "./components/core/hero-section/hero-section.component";
import { MyServicesComponent } from "./components/core/my-services/my-services.component";
import { AboutMeComponent } from "./components/core/about-me/about-me.component";
import { SendMailComponent } from "./components/core/send-mail/send-mail.component";
import { FooterComponent } from "./components/core/footer/footer.component";
import { UiToasterComponent } from "./components/shared/ui-toaster/ui-toaster.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    MyServicesComponent,
    AboutMeComponent,
    SendMailComponent,
    FooterComponent,
    UiToasterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
