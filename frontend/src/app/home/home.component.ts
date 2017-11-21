import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }
  user:Object;
  ngOnInit() {
    this.authService.getProfile().subscribe(
      (Profile)=>{this.user = Profile.user}
    ),
    (err)=>{console.log(err)}
  }
}
