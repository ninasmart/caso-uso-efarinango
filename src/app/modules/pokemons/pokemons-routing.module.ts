import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePokemonsComponent } from './components/manage-pokemons/manage-pokemons.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonsComponent,
    children: [
      {
        path: 'manage',
        component: ManagePokemonsComponent,
        canActivate: [],
      },
    ],
  },
  { path: '**', redirectTo: 'pokemons' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
