import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';

  // 1. Unused variable
  const unusedVar = 123;

  // 2. Type error: assigning string to number
  let shouldBeNumber: number = 'this is a string';

  // 3. Function with missing return type and unreachable code
  function brokenFunction() {
    return 42;
    console.log('This is unreachable');
  }

  // 4. Angular decorator error: missing @Component metadata
  // @Component({})
  export class BrokenClass {
    constructor() {
      // 5. Reference error: undefined variable
      console.log(notDefinedVar);
    }
  }
}
