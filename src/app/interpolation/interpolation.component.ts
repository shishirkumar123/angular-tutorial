import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  public name = "Joe";
  private age = 43; //private variables can be interpolated as well!

  public siteURL = window.location.href;

  constructor() { }

  ngOnInit() {
  }

}
