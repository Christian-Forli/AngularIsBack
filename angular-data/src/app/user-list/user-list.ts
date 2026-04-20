import { Component } from '@angular/core';
import { UserItem } from '../user-item/user-item';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItem],
  templateUrl: './user-list.html',
})
export class UserList {

  names: string[];

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }
}
