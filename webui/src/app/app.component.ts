import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;

  constructor(private service: AppService){
    this.service.sayHi().subscribe(response =>{
      this.title = response.content;
    })
  }




}
