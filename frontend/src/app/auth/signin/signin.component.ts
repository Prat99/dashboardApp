import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/auth/auth.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User;
  constructor(private authService: AuthService, private flashMessages: FlashMessagesService, private router:Router) {
    this.user = new User();
   }

  ngOnInit() {
  }

  login(form){
    console.log('log hit');
   this.authService.loginUser(this.user).subscribe(
     (res)=>{
       if(res.success){
      console.log('jwt token '+res.token);
      this.authService.saveUser(res.token, res.user);
      this.flashMessages.show('User is successfully login', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/home']);
     } else{
      this.flashMessages.show('Username or password is wrong', { cssClass: 'alert-danger', timeout: 2000 });
     }
    }
   )
  }
}
