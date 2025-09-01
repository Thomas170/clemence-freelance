import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-page-layout',
  imports: [],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {
  title = input('');
}
