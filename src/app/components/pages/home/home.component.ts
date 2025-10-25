import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SeoService } from '../../../services/seo.service';

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
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMetaTags({
      title: 'Clémence - Freelance Communication à Lyon | Stratégie Digitale',
      description: 'Freelance en communication à Lyon spécialisée en stratégie digitale, community management et création de contenu. Accompagnement personnalisé pour votre visibilité.',
      keywords: 'freelance communication lyon, community manager lyon, stratégie digitale lyon, communication digitale rhône-alpes',
      url: 'https://clemence-jomain.com',
      image: 'https://clemence-jomain.com/me.png'
    });
  }
}
