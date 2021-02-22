import { Component, OnInit } from '@angular/core';
import { AppService } from '../../servicios/app.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  is_loged:boolean = false;
  token:any =  localStorage.getItem('token');
  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    if(this.token){
      this.is_loged = true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');

  }

}
