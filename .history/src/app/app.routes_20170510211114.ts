import { Routes } from "@angular/router";
import { TestComponent } from "./test/test.component";
import{ PageNotFoundComponent } from "./pagenotfound/pagenotfound.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: TestComponent },
  { path: '**', component: PageNotFoundComponent }
]
