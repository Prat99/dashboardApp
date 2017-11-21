import { AuthService } from './../auth.service';
import { User } from './../auth.model';
import { Component, OnInit} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  constructor(private flashMessages: FlashMessagesService, private authService:AuthService, private router:Router) {
   this.user = new User();  
   }

  ngOnInit() {
    this.flashMessages.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
  }
  registerUser(form){
    console.log('user submit '+ JSON.stringify(this.user));
    this.authService.registerUser(this.user).subscribe(
      (response)=>{
        if(response.success){
          this.flashMessages.show('User is successfully registered', { cssClass: 'alert-success', timeout: 2000 });
          this.router.navigate(['/login']);
        }
         else{
          this.flashMessages.show('Something went wrong', { cssClass: 'alert-success', timeout: 2000 });
         }
      }
    )

  }

}
