import { Component, computed, input } from '@angular/core';

type ImageSize = {
  width: number;
  height: number;
};

@Component({
  selector: 'ui-image',
  imports: [],
  templateUrl: './ui-image.html',
  styleUrl: './ui-image.css',
})
export class UiImage {
  readonly imageName = input.required<string>();
  readonly imageAlt = input<string>('Image');
  readonly imageType = input<ImageType | string>();
  readonly imageExt = input<string>('webp');
  readonly isFirst = input<boolean>(false);

  readonly imagePath = computed(() => '/images/' + this.imageName() + '.' + this.imageExt());

  readonly imageSize = computed<ImageSize>(() => {
    switch (this.imageType()) {
      case ImageType.Full:
        return {
          width: 1920,
          height: 1080,
        };
      case ImageType.Card:
        return {
          width: 160,
          height: 160,
        };
      case ImageType.Icon:
        return {
          width: 80,
          height: 80,
        };
      case ImageType.SmallIcon:
        return {
          width: 32,
          height: 32,
        };
      default:
        return {
          width: 800,
          height: 800,
        };
    }
  });
}

export enum ImageType {
  Full = 'full',
  Card = 'card',
  Decor = 'decor',
  Icon = 'icon',
  SmallIcon = 'small_icon',
}
