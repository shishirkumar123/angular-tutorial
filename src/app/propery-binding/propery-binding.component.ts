import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propery-binding',
  templateUrl: './propery-binding.component.html',
  styleUrls: ['./propery-binding.component.scss']
})
export class ProperyBindingComponent implements OnInit {

  public addressId = "address";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}
