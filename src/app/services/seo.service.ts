import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type MetaConfig = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
};

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  updateMetaTags(config: MetaConfig) {
    this.title.setTitle(config.title);
    this.meta.updateTag({ 
      name: 'description', 
      content: config.description 
    });

    // Keywords
    if (config.keywords) {
      this.meta.updateTag({ 
        name: 'keywords', 
        content: config.keywords 
      });
    }

    // Open Graph (Facebook, LinkedIn)
    this.meta.updateTag({ 
      property: 'og:title', 
      content: config.title 
    });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: config.description 
    });
    this.meta.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
    
    if (config.image) {
      this.meta.updateTag({ 
        property: 'og:image', 
        content: config.image 
      });
    }

    if (config.url) {
      this.meta.updateTag({ 
        property: 'og:url', 
        content: config.url 
      });
    }

    // Twitter Card
    this.meta.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    this.meta.updateTag({ 
      name: 'twitter:title', 
      content: config.title 
    });
    this.meta.updateTag({ 
      name: 'twitter:description', 
      content: config.description 
    });
  }
}