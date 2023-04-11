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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MenuTemplateComponent,
    MenuExtratoComponent,
    UserCheckHeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
