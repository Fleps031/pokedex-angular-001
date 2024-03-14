import { Component } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [PokemonListComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent { 

}
