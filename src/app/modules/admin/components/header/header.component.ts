import { Component, OnInit } from '@angular/core';
import { AuthenticatorServiceService } from 'src/app/services/authenticator-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticatorServiceService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.auth.logOut();
  }

}
