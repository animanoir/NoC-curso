//Óscar A. Montiel
//The Nature of Code, (Course, homework 3).
//twitter: @_geosmina

//Used code for 2D water simulation by http://www.openprocessing.org/user/25336

var numCols = 160;
var water = [];
var ten = 0.025;
var damp = 0.065;
var spread = 0.001;
var stone;


function setup() {
  createCanvas(800, 600); //Creates the canvas where everything will happen.

  for(var i=0; i<numCols; i++){
    water[i] = new Water(i*5, 500, 240, 240, 0);
  }

  stone = new Stone(createVector(random(width), -30));
}

function draw() {
  background(0);
  stone.run();

  if (stone.pos.y>240) {
    stone.pos.y=200-random(1000);
    stone.pos.x=random(width);
    stone.vel.y=0;
    stone.alpha=255;
  }
  
  for(var i=0; i<numCols; i++){

    water[i].display();
    water[i].update(damp, ten);

    if (stone.pos.y < 240 && stone.pos.y + stone.vel.y >= 240) {

      water[round(stone.pos.x/5)].h = stone.vel.y * stone.vel.y*5;
      console.log("Works.");
    }


    var lDeltas = new Array(numCols);
    var rDeltas = new Array(numCols);

    for(var j=0; j<8; j++){

      for(var l=0;l<numCols; l++){

        if(l > 0){
          lDeltas[l] = spread * (water[l].h - water[l-1].h);
          water[l-1].spd += lDeltas[l];
        }
        if(l < numCols-1){
          rDeltas[l] = spread * (water[l].h - water[l+1].h);
          water[l+1].spd += rDeltas[l];
        }
      }

      for(var r=0; r<numCols; r++){
        if(r > 0){
          water[r-1].h += lDeltas[r];
        }
        if(r < numCols - 1){
          water[r+1].h += rDeltas[r];
        }
      }
    }
  }
}
