import {Component, ViewEncapsulation, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./fooTheme.less'],
  template: '',
})
export class FooTheme {
  constructor() {
    console.log('changed theme', this);
  }
}

@NgModule({
  declarations: [FooTheme],
  imports: [
    RouterModule.forChild([{ path: '', component: FooTheme, pathMatch: 'full' }]),
  ],
})
export class FooThemeModule {
}
