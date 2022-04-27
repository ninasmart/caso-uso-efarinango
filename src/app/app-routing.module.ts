import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './shared/main/app.main.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppMainComponent,
        loadChildren: () =>
          import('./modules/pokemons/pokemons.module').then(
            (m) => m.PokemonsModule
          ),
        canActivate: [],
      },
      { path: '**', component: AppMainComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
