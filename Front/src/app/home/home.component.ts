import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  posts: any;
  constructor(private data: DataService, private postService: PostService) {}

  ngOnInit(): void {
    console.log('hello i m home', this.user);
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
      console.log('hello i m home', this.posts);
    });
    // this.data.currentuser.subscribe((user) => (this.user = user));
    this.newuser();
  }
  newuser() {
    this.data.changekickers(this.user.kickers);
  }
}
