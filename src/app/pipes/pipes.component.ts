import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  pledge = "india is my country";
  person = {
    "name" : "Shishir",
    "hobby" : "chess"
  };

  public date = new Date;

  constructor() { }

  ngOnInit() {
  }

}
