import { Injectable } from '@angular/core';
import { Presenter } from 'src/app/core/presenter';
import { PokemonService } from 'src/app/services/pokemons/pokemon.service';
import { ManagePokemonView } from '../manage-pokemons.view';

@Injectable({
  providedIn: 'root',
})
export class ManagePokemonPresenter implements Presenter {
  view!: ManagePokemonView;
  constructor(private pokemonService: PokemonService) {}

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe((data: any) => {
      this.view.pokemons = data;
    });
  }

  savePokemon() {
    this.pokemonService
      .savePokemon(this.view.pokemon)
      .subscribe((data: any) => {
        this.view.viewGeneratePokemon = false;
        this.getAllPokemons();
      });
  }

  getPokemonById(id: number) {
    this.pokemonService.getPokemonById(id).subscribe((data: any) => {
      this.view.pokemon = data[0];
      this.view.addValuesForm();
    });
  }

  updatePokemon() {
    this.pokemonService
      .updatePokemon(this.view.pokemon)
      .subscribe((data: any) => {
        this.view.viewGeneratePokemon = false;
        this.view.isUpdate = false;
        this.getAllPokemons();
      });
  }

  deletePokemon(id: number) {
    this.pokemonService.deletePokemon(id).subscribe((data: any) => {
      this.getAllPokemons();
    });
  }
}
