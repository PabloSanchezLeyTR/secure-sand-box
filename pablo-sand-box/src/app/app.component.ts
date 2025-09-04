import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';

  // HTML con errores de accesibilidad para pruebas
  a11yErrorsHtml = `
    <!-- Botón sin nombre accesible -->
    <button></button>
    <!-- Imagen sin alt -->
    <img src=\"logo.png\">
    <!-- Input sin label -->
    <input type=\"text\">
    <!-- Enlace vacío -->
    <a></a>
    <a href=\"#\"></a>
    <!-- Elemento deprecado -->
    <font color=\"red\">Texto deprecado</font>
    <!-- Tabla sin encabezados -->
    <table><tr><td>Dato</td></tr></table>
    <!-- Bajo contraste -->
    <span style=\"color: #eee; background: #fff;\">Texto bajo contraste</span>
    <!-- Iframe sin título -->
    <iframe src=\"video.mp4\"></iframe>
    <!-- IDs duplicados -->
    <div id=\"duplicado\"></div><div id=\"duplicado\"></div>
    <!-- Lista vacía -->
    <ul></ul>
  `;
}
