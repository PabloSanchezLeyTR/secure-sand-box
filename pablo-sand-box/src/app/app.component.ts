// ESLint error: variable declarada pero no usada
const unusedVariable = 123;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';
}
