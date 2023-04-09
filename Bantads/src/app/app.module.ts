import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormComponent } from '../components/user-form/form.component';
import { MenuTemplateComponent } from '../components/menu-frame/menu-template.component';
import { MenuExtratoComponent } from '../components/menu-components/menu-extrato/menu-extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MenuTemplateComponent,
    MenuExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
