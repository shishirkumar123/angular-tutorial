import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  @Input() appData;
  //@Input('appData') altMsg; //uncomment this to see this line work. But above line wont work

  @Output() navEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  emitEvent(){
    console.log("emitEvent called");
    this.navEvent.emit("Nav component emitting event");
  }
}
