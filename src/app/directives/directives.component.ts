import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  appear = true;
  content=""; //change value to 'akbar' or 'antony' to display different content

  names = ["Rohit", "Mohit", "Sobhit", "Sumit", "Punit", "Ramesh"];

  constructor() { }

  ngOnInit() {
  }

}
