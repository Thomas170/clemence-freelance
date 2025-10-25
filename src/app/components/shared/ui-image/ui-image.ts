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
  readonly imageName = input.required<ImageName | string>();
  readonly imageAlt = input<string>('Image');
  readonly imageType = input<ImageType | string>();
  readonly isFirst = input<boolean>(false);

  readonly imagePath = computed(() => '/images/' + this.imageName() + '.webp');

  readonly imageSize = computed<ImageSize>(() => {
    switch (this.imageType()) {
      case ImageType.Full:
        return {
          width: 1920,
          height: 1080,
        };
      case ImageType.Card:
        return {
          width: 300,
          height: 180,
        };
      case ImageType.Icon:
        return {
          width: 60,
          height: 60,
        };
      default:
        return {
          width: 800,
          height: 800,
        };
    }
  });
}

export enum ImageName {
  Event = 'event',
  HeroImage = 'hero_image',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Me = 'me',
  Media = 'media',
  PandaIcon = 'panda_icon',
  Strat = 'strat',
  Youtube = 'youtube',
}

export enum ImageType {
  Full = 'full',
  Card = 'card',
  Decor = 'decor',
  Icon = 'icon',
}
