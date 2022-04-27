import { ManagePokemonPresenter } from './manage-pokemons.presenter';
import { Observable, of, throwError } from 'rxjs';
describe('Tests of module pokemons => manage-pokemons.presenter', () => {
  let pokemonService = jasmine.createSpyObj('PokemonService', [
    'getAllPokemons',
    'savePokemon',
    'getPokemonById',
    'updatePokemon',
    'deletePokemon',
  ]);
  let managePokemonPresenter = new ManagePokemonPresenter(pokemonService);

  beforeEach(() => {
    pokemonService = jasmine.createSpyObj('PokemonService', ['getAllPokemons']);
    managePokemonPresenter = new ManagePokemonPresenter(pokemonService);
  });

  it('it should list pokemons', () => {
    const managePokemonView = jasmine.createSpyObj('ManagePokemonView', [
      'searchInput',
      'pokemons',
      'pokemon',
      'viewGeneratePokemon',
      'addValuesForm',
      'isUpdate',
    ]);
    const dataFromServer: any = {
      data: [
        {
          id: 6718,
          name: 'Yanma2',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
          type: 'fire',
          hp: 50,
          attack: 23,
          defense: 76,
          idAuthor: 1,
          created_at: '2022-03-17T21:34:44.096Z',
          updated_at: '2022-04-18T14:30:37.921Z',
        },
      ],
    };

    managePokemonPresenter.view = managePokemonView;

    managePokemonPresenter.view.pokemons = dataFromServer.data;

    const observable: Observable<any> = of(dataFromServer);
    pokemonService.getAllPokemons.and.returnValue(observable);

    pokemonService.getAllPokemons.and.returnValue(
      new Observable((data) => {
        data.next(dataFromServer);
        data.complete();
      })
    );

    managePokemonPresenter.getAllPokemons();

    expect(managePokemonPresenter.view.pokemons).toBeGreaterThanOrEqual(
      dataFromServer.data
    );
  });
});
