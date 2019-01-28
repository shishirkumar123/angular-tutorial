import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({//@component annotation tells angular that this class might inject other injectable class(es)
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
