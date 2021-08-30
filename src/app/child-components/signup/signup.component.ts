import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private reg: RegisterService) { }

  ngOnInit(): void {
  }

  register = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z1-9]+$')]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z1-9]+$')]),
    checkbox: new FormControl('', [Validators.requiredTrue])
  });

  get checkbox(){
    return this.register.get('checkbox');
  }

  get name () 
  {
    return this.register.get('name');
  }

  get email () 
  {
    return this.register.get('email');
  }

  get password () 
  {
    return this.register.get('password');
  }

  get confirm_password () 
  {
    return this.register.get('confirm_password');
  }

  onSubmit(){
    console.warn(this.register.value);
    
    this.reg.register(this.register.value).subscribe((result)=>{
      console.warn('result', result);
    })
  }

}
