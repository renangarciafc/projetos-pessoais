import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activitedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  pokemon: any;
  isLoading: boolean = false;
  error: boolean = false;

  get getPokemon() {
    const id = this.activitedRouter.snapshot.params['id'];
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const urlName = 'https://pokeapi.co/api/v2/pokemon-species';
    const pokemon = this.pokeApiService.ApiGetPokemons(`${url}/${id}`);
    const name = this.pokeApiService.ApiGetPokemons(`${urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next:(data) => {
        this.pokemon = data;
        this.isLoading = true;
      },
      error: (error: any) => {
        console.log(error);
        this.error = true;
      }
    });
  }

}
