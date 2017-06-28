import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ngMaterial } from 'angular-material-expansion-panel';

import { AppComponent } from './app.component';
import { RoutingModule } from "./app-routing.module";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeTestComponent } from './home-test/home-test.component';
import { SkriptComponent } from './Skript/Skript.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    HomeTestComponent,
    SkriptComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
