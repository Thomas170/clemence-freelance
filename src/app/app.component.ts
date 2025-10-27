import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/core/header/header.component";
import { FooterComponent } from "./shared/core/footer/footer.component";
import { UiToasterComponent } from "./shared/design/ui-toaster/ui-toaster.component";

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
}
