import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

const routes: Routes = [
  {path: '' , redirectTo: 'juegos' , pathMatch: 'full'},
  {path : 'juegos', component: MenuPrincipalComponent},
  {path: 'juegos/top10', component: MenuPrincipalComponent},
  {path: 'juegos/playstation', component: MenuPrincipalComponent},
  {path: 'juegos/xbox', component: MenuPrincipalComponent},
  {path: 'juegos/pc', component: MenuPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
