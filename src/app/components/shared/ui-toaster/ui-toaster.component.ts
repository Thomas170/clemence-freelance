import { Component } from '@angular/core';
import { UiToasterService } from './ui-toaster.service';

@Component({
  selector: 'ui-toaster',
  standalone: true,
  imports: [],
  templateUrl: './ui-toaster.component.html',
  styleUrl: './ui-toaster.component.css',
})
export class UiToasterComponent {
  message: string | null = null;

  constructor(private toaster: UiToasterService) {
    this.toaster.message$.subscribe((msg) => {
      this.message = msg;
    });
  }
}
