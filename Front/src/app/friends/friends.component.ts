import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  friends = this.user.friends;
  invitations = this.user.invitations;
  constructor(private data: DataService, private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.invitations);
  }
  linkImg(fileName: string) {
    // base_URL returns localhost:3000 or the production URL
    return `http://localhost:3001/${fileName}`;
  }
  accept(friendId: String) {
    this.userService
      .acceptInvitation(this.user._id, friendId)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
