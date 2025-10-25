import { afterNextRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { UiToasterComponent } from "./components/shared/ui-toaster/ui-toaster.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    UiToasterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Charger les polices secondaires après le rendu initial
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.loadSecondaryFonts();
      }
    });
  }

  private loadSecondaryFonts() {
    // Attendre que la page soit interactive
    setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'assets/fonts-secondary.css';
      document.head.appendChild(link);
    }, 1000); // Délai de 1 seconde après le chargement
  }
}
