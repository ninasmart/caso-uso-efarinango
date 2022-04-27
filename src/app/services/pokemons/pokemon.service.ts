import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * @author Edison Farinango patricio.80@gmail.com
 */
export class PokemonService {
  URL_API = environment.urlPokemon;

  constructor(private http: HttpClient) {}

  getAllPokemons() {
    return this.http.get(`${this.URL_API}/pokemons?idAuthor=1`);
  }

  getPokemonById(id: number) {
    return this.http.get(`${this.URL_API}/pokemons?id=${id}`);
  }

  updatePokemon(pokemon: Pokemon) {
    return this.http.put(`${this.URL_API}/pokemons/${pokemon.id}`, pokemon);
  }

  savePokemon(pokemon: Pokemon) {
    return this.http.post(`${this.URL_API}/pokemons?idAuthor=1`, pokemon);
  }

  deletePokemon(id: number) {
    return this.http.delete(`${this.URL_API}/pokemons/${id}`);
  }
}
