import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() {

    this.score = 10;
   }

  ngOnInit() {
  }

  score: number;

  updateScore (score: number){
    this.score += score;
  }

}
