import { Component } from '@angular/core';
import { UiTitleDirective } from "../../../shared/directives/ui-title.directive";
import { UiButtonDirective } from "../../../shared/directives/ui-button.directive";
import { UiCard } from "../../../shared/design/ui-card/ui-card";

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [UiTitleDirective, UiButtonDirective, UiCard],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.css'
})
export class MyServicesComponent {

}
