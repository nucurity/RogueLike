import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor() { }

  moveUp(){
    console.log("UP");
  }

  moveLeft(){
    console.log("LEFT");
  }

  moveRight(){
    console.log("RIGHT");
  }

  moveDown(){
    console.log("DOWN");
  }

  ngOnInit() {
  }

}
