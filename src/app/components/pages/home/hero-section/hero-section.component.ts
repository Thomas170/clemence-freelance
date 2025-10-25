import { Component } from '@angular/core';
import { UiImage } from "../../../shared/ui-image/ui-image";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [UiImage],
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
