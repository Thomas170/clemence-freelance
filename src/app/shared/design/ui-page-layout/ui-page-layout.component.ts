import { Component, input } from '@angular/core';
import { UiTitleDirective } from "../../directives/ui-title.directive";

@Component({
  selector: 'ui-page-layout',
  imports: [UiTitleDirective],
  templateUrl: './ui-page-layout.component.html',
  styleUrl: './ui-page-layout.component.css'
})
export class UiPageLayoutComponent {
  title = input('');
}
