import {Component, HostBinding} from '@angular/core';
import {AppConfig} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  @HostBinding('class')
  themeClass: string;

  constructor(public appConfig: AppConfig) {
  }
}
