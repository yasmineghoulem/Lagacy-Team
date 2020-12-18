import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  user: {} | undefined;
  kickers: any | undefined;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentkickers.subscribe((kickers) => {
      this.kickers = kickers;
    });
    console.log(Array.isArray(this.kickers));
  }
}
