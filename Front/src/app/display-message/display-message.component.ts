import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss'],
})
export class DisplayMessageComponent implements OnInit {
 @Input() currentFriend: User | undefined;

  constructor() {}

  ngOnInit(): void {}
}
