import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ManagePokemonView } from './manage-pokemons.view';
import { ManagePokemonPresenter } from './presenter/manage-pokemons.presenter';

@Component({
  selector: 'app-manage-pokemons',
  templateUrl: './manage-pokemons.component.html',
  styleUrls: ['./manage-pokemons.component.scss'],
})
export class ManagePokemonsComponent implements OnInit, ManagePokemonView {
  searchInput = '';
  pokemons: Pokemon[] = [];
  pokemon: Pokemon = {};
  viewGeneratePokemon = false;
  frmGeneraPokemon: FormGroup;
  submitted = false;
  isUpdate = false;
  constructor(
    private formBuilder: FormBuilder,
    private managePokemonPresenter: ManagePokemonPresenter
  ) {
    managePokemonPresenter.view = this;
    this.frmGeneraPokemon = this.formBuilder.group({
      name: ['', Validators.required],
      image: [{ value: '', disabled: true }, []],
      attack: [
        30,
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(100),
        ],
      ],
      defense: [
        70,
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(100),
        ],
      ],
    });
  }
  allowUi(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  showGeneratePokemon() {
    this.viewGeneratePokemon = true;
  }

  getAllPokemons() {
    this.managePokemonPresenter.getAllPokemons();
  }

  onSubmit() {
    this.submitted = true;

    if (this.frmGeneraPokemon.invalid) {
      return;
    }
    //this.pokemon.id = Math.floor(Math.random() * 1000);
    this.pokemon.idAuthor = 1;
    this.pokemon.hp = 50;
    this.pokemon.type = 'fire';
    this.pokemon.name = this.frmGeneraPokemon.get('name')?.value;
    this.pokemon.attack = this.frmGeneraPokemon.get('attack')?.value;
    this.pokemon.image =
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png';
    this.pokemon.defense = this.frmGeneraPokemon.get('defense')?.value;

    this.isUpdate ? this.updatePokemon() : this.savePokemon();
  }

  savePokemon() {
    this.managePokemonPresenter.savePokemon();
  }

  updatePokemon() {
    this.managePokemonPresenter.updatePokemon();
  }

  get f() {
    return this.frmGeneraPokemon.controls;
  }

  addValuesForm() {
    this.frmGeneraPokemon.patchValue({
      name: this.pokemon.name,
      attack: this.pokemon.attack,
      image: this.pokemon.image,
      defense: this.pokemon.defense,
    });
  }

  editPokemon(pokemon: any) {
    this.viewGeneratePokemon = true;
    this.isUpdate = true;
    this.managePokemonPresenter.getPokemonById(pokemon.id);
  }

  deletePokemon(pokemon: any) {
    this.managePokemonPresenter.deletePokemon(pokemon.id);
  }

  cancelGeneratePokemon() {
    this.viewGeneratePokemon = false;
    this.isUpdate = false;
    this.frmGeneraPokemon.patchValue({
      name: '',
      attack: 0,
      image: '',
      defense: 0,
    });
  }
}
