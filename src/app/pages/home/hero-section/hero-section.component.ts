import { Component } from '@angular/core';
import { UiImage } from "../../../shared/design/ui-image/ui-image";
import { UiButtonDirective } from "../../../shared/directives/ui-button.directive";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [UiImage, UiButtonDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }  
}
