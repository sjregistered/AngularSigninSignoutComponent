import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthenticatorServiceService } from 'src/app/services/authenticator-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticatorServiceService, private router:Router) { }
  falock = faLock;
  Loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
  onSubmit():void{
    console.log(this.Loginform.value);
    if(this.Loginform.valid){
      let body  = {
        email: this.Loginform.value.email,
        password: this.Loginform.value.password
      }
      this.auth.logIn(body).subscribe(
        (result : any) => {
          console.log(result)
          this.auth.setToken(result.token);
          this.router.navigate(['admin']);
        },
        (err: Error) => {
          alert(err.message)
        }
      )
    }
  }

  get email () 
  {
    return this.Loginform.get('email');
  }

  get password() {
    return this.Loginform.get('password');
  }

}
