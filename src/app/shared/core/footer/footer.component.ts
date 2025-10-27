import { Component, inject } from '@angular/core';
import { UiToasterService } from '../../design/ui-toaster/ui-toaster.service';
import { UiImage } from "../../design/ui-image/ui-image";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [UiImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly uiToasterService = inject(UiToasterService);
  readonly linkedin = 'https://www.linkedin.com/in/cl%C3%A9mence-jomain-32b66b1a1/';
  readonly instagram = 'https://www.linkedin.com/in/cl%C3%A9mence-jomain-32b66b1a1/';
  readonly youtube = 'https://www.linkedin.com/in/cl%C3%A9mence-jomain-32b66b1a1/';

  copy(value: string, name: string) {
    navigator.clipboard.writeText(value);
    this.uiToasterService.show(name + ' copié !');
  }
}
