import { Component, inject } from '@angular/core';
import { UiPageLayoutComponent } from "../../shared/design/ui-page-layout/ui-page-layout.component";
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-projects',
  imports: [UiPageLayoutComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMetaTags({
      title: 'Clémence - Freelance Communication à Lyon | Stratégie Digitale',
      description: 'Découvrez mes projets en communication et mes réalisations à Lyon.',
      keywords: 'freelance communication lyon, community manager lyon, stratégie digitale lyon, communication digitale rhône-alpes',
      url: 'https://clemence-jomain.com',
      image: 'https://clemence-jomain.com/me.png',
      page: 'projects'
    });
  }
}
