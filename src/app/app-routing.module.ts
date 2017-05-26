import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Pagenotfound0Component } from './pagenotfound0/pagenotfound0.component';
import { Pagenotfound1Component } from './pagenotfound1/pagenotfound1.component';
import { Pagenotfound2Component } from './pagenotfound2/pagenotfound2.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'pagenotfound',
        component: Pagenotfound0Component
      }
    ]
  }, 
  {
    path: 'pagenotfound0',
    component: Pagenotfound0Component
  },
  {
    path: 'pagenotfound1',
    component: Pagenotfound1Component
  },
  {
    path: '**',
    component: Pagenotfound2Component
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }