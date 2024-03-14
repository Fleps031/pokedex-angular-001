import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemons: any[] = [];
  constructor(private dataService: DataService){
  }

  ngOnInit(): void{
    this.dataService.getPokemons()
      .subscribe((response:any)=>{
        response.results.forEach((result: { name: string; }) => {
          this.dataService.getMorePokemon(result.name)
            .subscribe((uniqResponse: any)=>{
              this.pokemons.push(uniqResponse)
              
            })
        });
      })
      console.log(this.pokemons)
  }
}
