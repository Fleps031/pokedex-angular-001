import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  link_png_pokeball: string = 'https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_1280.png';
}
