import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.less']
})
export class PokeListComponent implements OnInit {

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons().subscribe({
      next: res => {
        this.pokemonsList = res.results;
        this.pokemonsListFilter = res.results;
      },
      error: error => {
        console.log(error);
        this.error = true;
      }
    });
  }

  url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=';
  number: number = 0;

  pokemonsList: any = [];
  pokemonsListFilter: any = [];
  error: boolean = false;
  search: string = '';

  getSearch(value: string) {
    this.search = value;
    this.pokemonsList = this.pokemonsListFilter;
    const filter = this.pokemonsList.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemonsList = filter;
  }

  paginatorNextPokemon() {
    this.number = this.number + 50;
    this.pokeApiService.getNextPokemons(`${this.url}${this.number}&limit=50`).subscribe({
      next: res => {
        console.log(res);
        this.pokemonsList = res.results;
        this.pokemonsListFilter = res.results;
      },
      error: error => {
        console.log(error);
        this.error = true;
      }
    });
  }

  paginatorBackPokemon() {
    this.number = this.number - 50;
    this.pokeApiService.getNextPokemons(`${this.url}${this.number}&limit=50`).subscribe({
      next: res => {
        console.log(res);
        this.pokemonsList = res.results;
        this.pokemonsListFilter = res.results;
      },
      error: error => {
        console.log(error);
        this.error = true;
      }
    });
  }

}
