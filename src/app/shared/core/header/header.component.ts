import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiLinkDirective } from "../../directives/ui-link.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, UiLinkDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
