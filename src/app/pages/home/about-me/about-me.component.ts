import { Component } from '@angular/core';
import { UiImage } from "../../../shared/design/ui-image/ui-image";
import { UiTitleDirective } from "../../../shared/directives/ui-title.directive";
import { UiButtonDirective } from "../../../shared/directives/ui-button.directive";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [UiImage, UiTitleDirective, UiButtonDirective, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
}
