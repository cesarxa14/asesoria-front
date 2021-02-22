import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private api_uri = '/api/general';
  metadata: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient,
              private router: Router) { }

  login(obj){
    return this.http.post(`${this.api_uri}/login`, obj);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  getRoles(){
    return this.http.get(`${this.api_uri}/getRoles`);
  }

  register(obj){
    return this.http.post(`${this.api_uri}/register`, obj);
  }
}
