import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ThemeSwitcherComponent} from './themeSwitcher.component';
import {THEME_ROUTES} from './theme.routes';
import {ProxyComponent} from './proxy.component';
import {ThemeService} from './theme.service';
import {AppConfig} from './app.config';
import {ChildComponent} from './child.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, ProxyComponent, ThemeSwitcherComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([{ path: '', redirectTo: 'child', pathMatch: 'full' }, {
      path: 'child',
      pathMatch: 'full',
      component: ChildComponent,
    },
      ...THEME_ROUTES
    ]),
  ],
  providers: [ThemeService, AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule {
}
