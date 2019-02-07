import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable} from 'rxjs'; // Is this neccessory



@Injectable({
  providedIn: 'root'
})
//Important - Without above annotation @Injectable block, the code works fine. So what is the use.
//Useful when EmployeeService has more objects embeded. Demonstrate.
export class EmployeeService {
  //This service has been added in providers[] in AppModule

  private _url = "assets/data/employees.json";

  constructor(private httpClient: HttpClient) { }

  //getEmployees(){ // This works too, Why below line is needed?
  getEmployees(): Observable<IEmployee[]>{
    // return [
    //   {"id":"1", "name":"Ram", "age":"28"},
    //   {"id":"2", "name":"Raheem", "age":"26"},
    //   {"id":"3", "name":"John", "age":"27"},
    //   {"id":"4", "name":"Kartaar", "age":"26"}
    // ];

    //Remember to add HttpClientModule in import [] in app.modules
    return this.httpClient.get<IEmployee[]>(this._url); //This returns Observable

    //Observer is better than promise. It can do everything a Promise can do and more.
    //Main difference - Promose can handle single event, Observable can handle multiple events. How?
  }
}
