import {AfterViewChecked, Component} from '@angular/core';
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'app works!';

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
