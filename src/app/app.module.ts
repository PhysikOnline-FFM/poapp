import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { RoutingModule } from "./app-routing.module";
import { Pagenotfound0Component } from './pagenotfound0/pagenotfound0.component';
import { Pagenotfound1Component } from './pagenotfound1/pagenotfound1.component';
import { Pagenotfound2Component } from './pagenotfound2/pagenotfound2.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagenotfound0Component,
    Pagenotfound1Component,
    Pagenotfound2Component,
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
