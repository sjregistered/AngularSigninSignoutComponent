import { Component, OnInit } from '@angular/core';
import { ourPeople } from 'src/app/interfaces/interface-admin';
import { GetSService } from 'src/app/services/get-s.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
  }
}
