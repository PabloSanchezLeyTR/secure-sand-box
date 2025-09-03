const unusedVariable = 123;
var nombre = "Pablo";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';

  saludar() {
    console.log("Hola");
    let nombre_usuario = "Pablo";

    console.log("Hola mundo")
  }


 sinUso() {
  return true;
}

}
