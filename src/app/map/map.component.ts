import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: string[][];
  coordinates: number[];

  constructor() {
    this.map = [];
    this.refrashMap();

    this.coordinates = [5,5];
    this.moveHero(5);
  }

  refrashMap(){
    for (var x = 0; x < 11; x++) {
      var row : string[] = []; 
      for (var y = 0; y < 11; y++) {    
        var cell = "green";
        var chance = Math.floor((Math.random() * 100) + 1);
        if(chance  < 60)
          cell = "yellow";
        else if ( chance < 90)
          cell = "red";
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
        newCoordinate = 11;
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
      if (currentCoordinate == 11){
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
      if (currentCoordinate == 11){
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
        newCoordinate = 11;
      }
      else{
        newCoordinate = currentCoordinate-1;
      }
      this.coordinates.splice(0,1,newCoordinate);
    }
    //STAY
    else if (step == 5) {
    }
    //update position
    this.colorSetter(this.coordinates[0],this.coordinates[1],"blue");
  }

  function1(direction: number){
    console.log("Info from map, moving up " + direction);
  }

  //change color on provided coordinate
  colorSetter(x: number, y: number, color: string){
    var row: string[] = this.map[y];
    row.splice(x,1,color);
    this.map.splice(y,1,row);
  }


  ngOnInit() {
  }

}
