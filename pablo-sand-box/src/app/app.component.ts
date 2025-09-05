import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';

  // Cambio artificial para pruebas de PR
  getVersion(): string {
    return '1.0.0';
  }
}
