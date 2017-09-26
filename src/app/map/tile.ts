export class Tile {
    /*
    1 => green, earning points
    2 => yellow, minor losing points
    3 => red, major losing points
    4 => player
    */ 
    
        value: number;
        type: number;
        color: string;
    
        constructor() {
            this.type = 1;
            /*
            this.color = "test";
            this.value = -4;
            */
            var chance = Math.floor((Math.random() * 100) + 1);
            if(chance  < 60){
                this.type = 2;
            }
            else if ( chance < 90){
                this.type = 3
            }
    
    
            if (this.type == 1){
                this.color = "green";
                this.value = 5;
            }
            else if(this.type == 2){
                this.color = "yellow";
                this.value = -1;
            }
            else if(this.type == 3){
                this.color = "red"
                this.value = -5;
            }
        }
    }