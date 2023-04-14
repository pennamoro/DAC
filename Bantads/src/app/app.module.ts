import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormComponent } from '../components/user-form/form.component';
import { MenuTemplateComponent } from '../components/menu-frame/menu-template.component';
import { MenuExtratoComponent } from '../components/menu-components/menu-extrato/menu-extrato.component';
import { UserCheckHeaderComponent } from '../components/user-check-header/user-check-header.component';

import { InicialClienteComponent } from 'src/Containers/Cliente/inicial-cliente/inicial-cliente.component';
import { InicialAdminComponent } from 'src/Containers/Admin/inicial-admin/inicial-admin.component';
import { InicialGerenteComponent } from 'src/Containers/Gerente/inicial-gerente/inicial-gerente.component';
import { ConsultaGerenteComponent } from '../Containers/Gerente/consulta-gerente/consulta-gerente.component';
import { DepositoClienteComponent } from 'src/Containers/Cliente/deposito-cliente/deposito-cliente.component';
import { ExtratoClienteComponent } from 'src/Containers/Cliente/extrato-cliente/extrato-cliente.component';
import { SaqueClienteComponent } from 'src/Containers/Cliente/saque-cliente/saque-cliente.component';
import { TransferenciaClienteComponent } from 'src/Containers/Cliente/transferencia-cliente/transferencia-cliente.component';
import { ConfiguracoesClienteComponent } from 'src/Containers/Cliente/configuracoes-cliente/configuracoes-cliente.component';

import { MenuDepositoComponent } from '../components/menu-components/menu-deposito/menu-deposito.component';
import { MenuSaqueComponent } from '../components/menu-components/menu-saque/menu-saque.component';
import { MenuTransferirComponent } from '../components/menu-components/menu-transferir/menu-transferir.component';
import { MenuConfiguracaoComponent } from '../components/menu-components/menu-configuracao/menu-configuracao.component';
import { MenuGerentesComponent } from '../components/menu-components/menu-gerentes/menu-gerentes.component';
import { MenuClientesComponent } from '../components/menu-components/menu-clientes/menu-clientes.component';
import { MenuTopClientesComponent } from '../components/menu-components/menu-top-clientes/menu-top-clientes.component';
import { MenuHomeComponent } from '../components/menu-components/menu-home/menu-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MenuTemplateComponent,
    MenuExtratoComponent,
    UserCheckHeaderComponent,
    routingComponents,
    InicialClienteComponent,
    InicialAdminComponent,
    InicialGerenteComponent,
    ConsultaGerenteComponent,
    DepositoClienteComponent,
    ExtratoClienteComponent,
    SaqueClienteComponent,
    TransferenciaClienteComponent,
    ConfiguracoesClienteComponent,
    MenuDepositoComponent,
    MenuSaqueComponent,
    MenuTransferirComponent,
    MenuConfiguracaoComponent,
    MenuGerentesComponent,
    MenuClientesComponent,
    MenuTopClientesComponent,
    MenuHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
