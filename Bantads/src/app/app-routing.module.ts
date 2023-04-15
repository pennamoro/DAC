import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoClienteComponent } from 'src/Containers/Cliente/deposito-cliente/deposito-cliente.component';
import { InicialClienteComponent } from 'src/Containers/Cliente/inicial-cliente/inicial-cliente.component';
import { HomeComponent } from 'src/Containers/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicial-cliente', component: InicialClienteComponent},
  {path: 'deposito-cliente', component: DepositoClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, InicialClienteComponent, DepositoClienteComponent]
