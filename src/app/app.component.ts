import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{message}}</h1>',
  standalone: true
})
export class AppComponent {
  message = 'My First Angular App';
}
