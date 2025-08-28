import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  copy(value: string, name: string) {
    navigator.clipboard.writeText(value);
    alert(name + ' copiée dans le presse-papier');    
  }
}
