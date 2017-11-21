import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private flashMessages: FlashMessagesService, private router:Router) {
   }

  ngOnInit() {
  }

  logoutUser(){
   this.auth.logout();
   this.router.navigate(['/login']);
  }

}
