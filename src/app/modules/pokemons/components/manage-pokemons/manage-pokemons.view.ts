import { View } from 'src/app/core/view';
import { Pokemon } from 'src/app/models/pokemon.model';

export interface ManagePokemonView extends View {
  searchInput: string;
  pokemons: Pokemon[];
  pokemon: Pokemon;
  viewGeneratePokemon: boolean;
  isUpdate: boolean;
  addValuesForm(): void;
}
