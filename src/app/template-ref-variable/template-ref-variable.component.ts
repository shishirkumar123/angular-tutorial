import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  templateUrl: './template-ref-variable.component.html',
  styleUrls: ['./template-ref-variable.component.scss']
})
export class TemplateRefVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log("this should be logged " + value);
  }

}
