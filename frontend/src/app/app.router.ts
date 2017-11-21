import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { AuthGuard } from 'app/auth-guards/auth.guard';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},  
  {path:'signup', component:SignupComponent},
  {path:'login', component:SigninComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'welcome', pathMatch:'full'}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);