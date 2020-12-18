import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() {}

  ngOnInit(): void {
    //console.log('hello i m home', JSON.parse(this.user || '{}'));
  }
}
