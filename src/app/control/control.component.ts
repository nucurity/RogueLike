import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor() { 
    this.direction = 1;
  }

  direction: number;

  @Output() myEvent = new EventEmitter();

  moveUp(){
    this.direction = 2;
    console.log("direction is " + this.direction);

    this.myEvent.emit(null);
  }
  /*
  move(direction: number){

    if (direction == 1){
      console.log("UP");
    } 
    else if (direction == 4){
      console.log("LEFT");
    } 
    else if (direction == 2){
      console.log("RIGHT");
    } 
    else if (direction == 3){
      console.log("DOWN");
    } 
  }
  */
  ngOnInit() {
  }

}
