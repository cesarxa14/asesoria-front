import { Injectable } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AppService} from './app.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private appService: AppService) { }

  intercept(req, next) { 
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.appService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
