import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  public status="text-red";
  public hasError=true; //change to false and see the effect

  constructor() { }

  ngOnInit() {
  }

}
