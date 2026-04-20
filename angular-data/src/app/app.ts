import { Component } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorld, UserList],
  templateUrl: './app.html',
})
export class App {
  title = 'angular-data';
}