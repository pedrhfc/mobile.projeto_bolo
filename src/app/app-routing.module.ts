import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'carrinho/:name', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },
  { path: 'profiteroles', loadChildren: './vitrine/profiteroles/profiteroles.module#ProfiterolesPageModule' },
  { path: 'caneles', loadChildren: './vitrine/caneles/caneles.module#CanelesPageModule' },
  { path: 'framboisier', loadChildren: './vitrine/framboisier/framboisier.module#FramboisierPageModule' },
  { path: 'fraisiers', loadChildren: './vitrine/fraisiers/fraisiers.module#FraisiersPageModule' },
  { path: 'paris_brest', loadChildren: './vitrine/paris_brest/paris_brest.module#ParisBrestPageModule' },
  { path: 'mille_feuille', loadChildren: './vitrine/mille_feuille/mille_feuille.module#MilleFeuillePageModule' },
  { path: 'souffle', loadChildren: './vitrine/souffle/souffle.module#SoufflePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
