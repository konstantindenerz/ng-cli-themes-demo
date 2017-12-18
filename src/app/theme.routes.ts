import {ProxyComponent} from './proxy.component';

export const THEME_ROUTES = [{
  path: 'foo',
  outlet: 'themeOutlet',
  component: ProxyComponent,
  loadChildren: 'fooTheme/fooTheme#FooThemeModule',
},
  {

    path: 'bar',
    outlet: 'themeOutlet',
    component: ProxyComponent,
    loadChildren: 'barTheme/barTheme#BarThemeModule',
  }];
