import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './menu/home/home.component';
import { ProfiloComponent } from './menu/profilo/profilo.component';
import { MessaggiComponent } from './menu/messaggi/messaggi.component';
import { BusinessManagerComponent } from './menu/business-manager/business-manager.component';
import { ImpostazioniComponent } from './menu/impostazioni/impostazioni.component';
import { LoginComponent } from './autenticazione/login/login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    ProfiloComponent,
    MessaggiComponent,
    BusinessManagerComponent,
    ImpostazioniComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
