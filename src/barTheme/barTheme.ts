import {Component, ViewEncapsulation, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./barTheme.less'],
  template: '',
})
export class BarTheme {
  constructor() {
    console.log('changed theme', this);
  }
}

@NgModule({
  declarations: [BarTheme],
  imports: [
    RouterModule.forChild([{ path: '', component: BarTheme, pathMatch: 'full' }]),
  ],
})
export class BarThemeModule {

}
