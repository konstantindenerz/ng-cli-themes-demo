import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AppConfig} from './app.config';

@Injectable()
export class ThemeService {
  constructor(private _router: Router,
              private _appConfig: AppConfig) {

  }

  public change(themeName: string): void {
    this._appConfig.themeClass = `theme-${themeName}`;
    this._router.navigate(['/', { outlets: { themeOutlet: themeName } }], { skipLocationChange: true });
  }
}
