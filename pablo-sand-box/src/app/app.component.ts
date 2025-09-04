import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Static HTML accessibility errors for axe-linter testing -->
    <button></button>
    <img src='logo.png'>
    <input type='text'>
    <a></a>
    <a href='#'></a>
    <font color='red'>Deprecated text</font>
    <table><tr><td>Data</td></tr></table>
    <span style='color: #eee; background: #fff;'>Low contrast text</span>
    <iframe src='video.mp4'></iframe>
    <div id='duplicate'></div>
    <div id='duplicate'></div>
    <ul></ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pablo-sand-box';
  // Static HTML accessibility errors for axe-linter testing
  template = `
    <button></button>
    <img src='logo.png'>
    <input type='text'>
    <a></a>
    <a href='#'></a>
    <font color='red'>Deprecated text</font>
    <table><tr><td>Data</td></tr></table>
    <span style='color: #eee; background: #fff;'>Low contrast text</span>
    <iframe src='video.mp4'></iframe>
    <div id='duplicate'></div>
    <div id='duplicate'></div>
    <ul></ul>
  `;
}
