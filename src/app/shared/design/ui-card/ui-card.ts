import { booleanAttribute, Component, input } from '@angular/core';
import { UiImage } from "../ui-image/ui-image";
import { UiTitleDirective } from "../../directives/ui-title.directive";

@Component({
  selector: 'ui-card',
  imports: [UiImage, UiTitleDirective],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.css',
})
export class UiCard {
  readonly title = input<string>();
  readonly image = input<string>('event');
  readonly isRowIcon = input(false, { transform: booleanAttribute });
}
