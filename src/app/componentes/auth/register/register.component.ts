import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../../../servicios/app.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  roles:any = [];
  registerForm: FormGroup;
  constructor(private _formBuilder : FormBuilder,
              private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.builderForm();
    this.appService.getRoles().subscribe(res=>{
      this.roles = res;
      console.log(this.roles)
    })
    
  }
  builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern(pattern)]],
      apellidos: ['', [Validators.required, Validators.pattern(pattern)]],
      correo: ['', [Validators.required, Validators.pattern(pattern)]],
      rol: [null, [Validators.required]],
      usuario: ['', [Validators.required, Validators.pattern(pattern)]],
      contraseña: ['', [Validators.required]]
    }) 
    form.valueChanges.subscribe(()=>{
      // this.invalidForm = this.loginForm.invalid;
    });
    return form;
  }
  get rol() { return this.registerForm.controls['rol']; }
  changeRol(e){

    console.log(e.value);
    this.rol.setValue(e.value);
  }

  register(){
    console.log(this.registerForm.value)

    this.appService.register(this.registerForm.value).subscribe(res=>{
      console.log(res);
    })
  }
 

}
