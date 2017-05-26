import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Pagenotfound2Component } from './pagenotfound2/pagenotfound2.component';
import { Pagenotfound3Component } from './pagenotfound3/pagenotfound3.component';

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
        component: PagenotfoundComponent
      }
    ]
  }, 
  {
    path: 'pagenotfound2',
    component: Pagenotfound2Component
  },
  {
    path: 'pagenotfound3',
    component: Pagenotfound3Component
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }