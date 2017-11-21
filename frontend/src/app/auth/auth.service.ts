import { Http, Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService{
    baseApi:string = 'http://localhost:3000/';
    authToken:any;

    constructor(private http:Http){}

    registerUser(user):Observable<any>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.baseApi}users/register`,user,{headers:headers}).map(res=>res.json());
    
    }

    loginUser(user):Observable<any>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log('inside service '+user);
        return this.http.post(`${this.baseApi}users/authenticate`,user,{headers:headers}).map(res=>res.json());
    }

    getProfile(){
        var headers = new Headers();
        this.getToken();
        headers.append('Authorization',this.authToken);
        headers.append('Content-type','application/json');
        return this.http.get(`${this.baseApi}users/profile`,{headers:headers}).map(res=>res.json());
    }

    saveUser(token, user){
        if(token){
            localStorage.setItem('user_token', token);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    logout(){
        localStorage.clear();
    }

    getToken(){
        this.authToken = localStorage.getItem('user_token');
    }

    loggedIn() {
        return tokenNotExpired('user_token');
    }
}