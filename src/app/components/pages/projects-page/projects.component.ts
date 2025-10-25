import { Component, inject } from '@angular/core';
import { PageLayoutComponent } from "../../shared/page-layout/page-layout.component";
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-projects',
  imports: [PageLayoutComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMetaTags({
      title: 'Clémence - Freelance Communication à Lyon | Stratégie Digitale',
      description: 'Freelance en communication à Lyon spécialisée en stratégie digitale, community management et création de contenu. Accompagnement personnalisé pour votre visibilité.',
      keywords: 'freelance communication lyon, community manager lyon, stratégie digitale lyon, communication digitale rhône-alpes',
      url: 'https://clemence-jomain.com',
      image: 'https://clemence-jomain.com/me.png',
      page: 'projects'
    });
  }
}
