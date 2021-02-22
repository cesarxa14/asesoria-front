import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService} from '../servicios/app.service';
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private appService: AppService,
             private router: Router){}
  canActivate(): boolean{
    if(this.appService.loggedIn()){
      return true;
    }
    this.router.navigateByUrl('login');
    
  }
  
}
