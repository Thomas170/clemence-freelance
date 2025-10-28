import { Component, inject } from '@angular/core';
import { UiPageLayoutComponent } from "../../shared/design/ui-page-layout/ui-page-layout.component";
import { SeoService } from '../../services/seo.service';
import { UiTitleDirective } from "../../shared/directives/ui-title.directive";
import { UiCard } from "../../shared/design/ui-card/ui-card";
import { UiHighlight } from "../../shared/design/ui-highlight/ui-highlight";
import { UiButtonDirective } from "../../shared/directives/ui-button.directive";
import { UiImage } from "../../shared/design/ui-image/ui-image";

@Component({
  selector: 'app-services',
  imports: [UiPageLayoutComponent, UiTitleDirective, UiCard, UiHighlight, UiButtonDirective, UiImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMetaTags({
      title: 'Clémence - Freelance Communication à Lyon | Stratégie Digitale',
      description: 'Découvrez mes services en communication et mes réalisations à Lyon.',
      keywords: 'freelance communication lyon, community manager lyon, stratégie digitale lyon, communication digitale rhône-alpes',
      url: 'https://clemence-jomain.com',
      image: 'https://clemence-jomain.com/me.png',
      page: 'services'
    });
  }
}
