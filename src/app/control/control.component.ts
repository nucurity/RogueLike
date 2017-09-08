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

    this.myEvent.emit(1);

  }

  move(direction: number){

    if (direction == 1){
      console.log("UP");
      this.myEvent.emit(1);
      
    } 
    else if (direction == 4){
      console.log("LEFT");
      this.myEvent.emit(4);
    } 
    else if (direction == 2){
      console.log("RIGHT");
      this.myEvent.emit(2);
    } 
    else if (direction == 3){
      console.log("DOWN");
      this.myEvent.emit(3);
    } 
  }

  ngOnInit() {
  }

}
