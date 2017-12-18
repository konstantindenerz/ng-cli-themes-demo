import {Component} from '@angular/core';
import {ThemeService} from './theme.service';
import {THEME_ROUTES} from './theme.routes';

@Component({
  selector: 'theme-switcher',
  templateUrl: './themeSwitcher.component.html',
})
export class ThemeSwitcherComponent {
  public themes = THEME_ROUTES;

  constructor(private _themeService: ThemeService) {

  }

  public change(key: string): void {
    this._themeService.change(key);
  }
}
