import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  templateUrl: './user-item.html',
})
export class UserItem {

  @Input() name: string = '';

}