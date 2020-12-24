import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  linkImg(fileName: string) {
    // base_URL returns localhost:3000 or the production URL
    return `http://localhost:3001/${fileName}`;
  }
  Logout() {
    this.toastr.success('Logged out!', '', {
      timeOut: 4000,
    });
    this.userService.Logout();
    this.router.navigate(['/login']);
  }
}
