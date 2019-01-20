import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public greetings="";
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("onClick called");
    this.greetings="Hello";
  }
}
