import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { RoutingModule } from "./app-routing.module";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Pagenotfound2Component } from './pagenotfound2/pagenotfound2.component';
import { Pagenotfound3Component } from './pagenotfound3/pagenotfound3.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    Pagenotfound2Component,
    Pagenotfound3Component,
    HeaderComponent,
    HomeComponent,
    SidenavComponent
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
