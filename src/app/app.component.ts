import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'ticketera';
  response:any;
  get(){
    return this.http.get("https://nodejs-mongodb-ticketera.herokuapp.com/")
      .subscribe((data:any) => {
        this.response = JSON.stringify(data)        
      })
  }
  getDesperfectos(){
    return this.http.get("https://nodejs-mongodb-ticketera.herokuapp.com/desperfectos")
      .subscribe((data:any) => {
        this.response = JSON.stringify(data)        
      })
  }
}
