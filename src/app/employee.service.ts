import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
//Important - Without above annotation @Injectable block, the code works fine. So what is the use.
//Useful when EmployeeService has more objects embeded. Demonstrate.
export class EmployeeService {
  //This service has been added in providers[] in AppModule

  constructor(private httpClient: HttpClient) { }

  getEmployees(){
    return [
      {"id":"1", "name":"Ram", "age":"28"},
      {"id":"2", "name":"Raheem", "age":"26"},
      {"id":"3", "name":"John", "age":"27"},
      {"id":"4", "name":"Kartaar", "age":"26"}
    ];
  }
}
