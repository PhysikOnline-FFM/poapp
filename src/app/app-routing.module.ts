import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeTestComponent } from './home-test/home-test.component';
const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'hometest',
        component: HomeTestComponent
      },
      {
        path: '**',
        component: PagenotfoundComponent
      },
      
    ]
  } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }