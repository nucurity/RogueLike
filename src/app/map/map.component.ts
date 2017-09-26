import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Tile} from './tile';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  map: Tile[][];
  coordinates: number[];

  constructor() {
    
    this.refrashMap();

    var tile = new Tile;
    console.log(tile.color + " " + " " + tile.value);

    this.coordinates = [5,5];
    this.moveHero(5);
  }

  refrashMap(){
    this.map = [];
    for (var x = 0; x < 11; x++) {
      var row : Tile[] = []; 
      for (var y = 0; y < 11; y++) {    
        var cell = new Tile();
      row.push(cell); 
      }
      this.map.push(row);
    }
  }

  moveHero(step: number) {
    // 1-up, 2-right, 3-down, 4-left, 5-stay

    var currentCoordinate;
    var newCoordinate;
    //moving UP
    if (step == 1) {
      this.colorSetter(this.coordinates[0],this.coordinates[1],"yellow");
      currentCoordinate = this.coordinates[1];
      if (currentCoordinate == 0){
        this.refrashMap();
        newCoordinate = 10;
      }
      else{
        newCoordinate = currentCoordinate-1;
      }
      this.coordinates.splice(1,1,newCoordinate);
    } 
    //moving RIGHT
    else if (step == 2) {
      this.colorSetter(this.coordinates[0],this.coordinates[1],"yellow");
      currentCoordinate = this.coordinates[0];
      if (currentCoordinate == 10){
        this.refrashMap();
        newCoordinate = 0;
      }
      else{
        newCoordinate = currentCoordinate+1;
      }
      this.coordinates.splice(0,1,newCoordinate);
    }
    //moving DOWN
    else if (step == 3) {
      this.colorSetter(this.coordinates[0],this.coordinates[1],"yellow");
      currentCoordinate = this.coordinates[1];
      if (currentCoordinate == 10){
        this.refrashMap();
        newCoordinate = 0;
      }
      else{
        newCoordinate = currentCoordinate+1;
      }
      this.coordinates.splice(1,1,newCoordinate);
    }
    //moving LEFT
    else if (step == 4) {
      this.colorSetter(this.coordinates[0],this.coordinates[1],"yellow");
      currentCoordinate = this.coordinates[0];
      if (currentCoordinate == 0){
        this.refrashMap();
        newCoordinate = 10;
      }
      else{
        newCoordinate = currentCoordinate-1;
      }
      this.coordinates.splice(0,1,newCoordinate);
    }
    //STAY
    else if (step == 5) {
    }
    //update position and score
    var row: Tile[] = this.map[this.coordinates[1]];
    var tile = row[this.coordinates[0]];
    this.myEvent.emit(tile.value);


    this.colorSetter(this.coordinates[0],this.coordinates[1],"blue");
  }

  function1(direction: number){
    console.log("Info from map, moving up " + direction);
  }

  //change color on provided coordinate
  colorSetter(x: number, y: number, color: string){
    var row: Tile[] = this.map[y];
    
    var tile = row[x];
    if (color == "yellow"){
      tile.color = color;
      tile.type = 2;
      tile.value = -1;
    }
    if (color == "blue"){
      tile.color = color;
      tile.type = 4;
      tile.value = 0;
    }
    
    tile.color = color;

    row.splice(x,1,tile);
    this.map.splice(y,1,row);
  }


  ngOnInit() {
  }

}


