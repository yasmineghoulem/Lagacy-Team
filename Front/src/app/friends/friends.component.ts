import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  user: {} | undefined;
  friends: any | undefined;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentfriends.subscribe((friends) => {
      this.friends = friends;
    });
    console.log(Array.isArray(this.friends));
  }
}
