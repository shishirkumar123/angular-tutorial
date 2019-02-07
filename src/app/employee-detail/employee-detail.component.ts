import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data); //Left hand side is argument of the function
                                                   //Right hand side is body of the function
        //Note: Using subscribe, data arrives asynchronously. What does this mean?
  }
}
