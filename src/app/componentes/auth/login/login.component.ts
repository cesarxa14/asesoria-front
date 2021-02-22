import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../../../servicios/app.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.builderForm();
    console.log(this.appService.getToken())
  }

  builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(pattern)]],
      password: ['', [Validators.required]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
  /**Getters */
  get usuario() { return this.loginForm.controls['usuario']; }
  get password() { return this.loginForm.controls['password']; }

  login(){
    console.log(this.loginForm.value);
    this.appService.login(this.loginForm.value).subscribe((res:any)=>{
      if(res.status == 0){ // login correcto
        alert('usuario correcto');
        localStorage.setItem('token',res.token);
        this.appService.metadata.next(res.metadata);
        this.router.navigateByUrl('/panel');
      }else{
        alert('usuario incorrecto');
      }
      
    })
  }

}
