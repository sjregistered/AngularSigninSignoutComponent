import { Component, OnInit } from '@angular/core';
import { GetSService } from 'src/app/services/get-s.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public people : any = [];

  constructor(private service : GetSService){}

  ngOnInit(): void {

    this.service.getOurPeople()
      .subscribe(
        (data:any) => {
          console.log(data)
          this.people = data.data
        }
        )
  }
}
