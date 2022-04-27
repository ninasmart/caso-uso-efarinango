import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePokemonsComponent } from './components/manage-pokemons/manage-pokemons.component';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PokemonsComponent,
    ManagePokemonsComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PokemonRoutingModule, HttpClientModule],
})
export class PokemonsModule {}
