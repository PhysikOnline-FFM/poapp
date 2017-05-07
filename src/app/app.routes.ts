import {Routes} from "@angular/router";
import {TestComponent} from "./test/test.component";
export const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: TestComponent}
]
