import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Template inline con errores de accesibilidad intencionales
  template: `
    <img src="logo.png">
    <button></button>
    <a href="#"></a>
    <input type="text">
    <form>
      <input type="text">
    </form>
    <span style="color:#ccc; background:#fff">Texto sin contraste</span>
    <iframe src="about:blank"></iframe>
    <div id="duplicado"></div>
    <div id="duplicado"></div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';
}
