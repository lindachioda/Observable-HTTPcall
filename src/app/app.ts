import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from './component/observable/observable';
import { Http } from './component/http/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Observable, Http],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myapp');
}
