import { Component, input } from '@angular/core';
import { UiImage } from "../ui-image/ui-image";

@Component({
  selector: 'ui-highlight',
  imports: [UiImage],
  templateUrl: './ui-highlight.html',
  styleUrl: './ui-highlight.css',
  host: {
    '[class.info]': `type() === 'info'`,
  }
})
export class UiHighlight {
  readonly type = input<'info' | 'warning' | 'error' | 'success'>('info');
}
