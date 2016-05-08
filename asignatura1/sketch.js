//Óscar A. Montiel
//The Nature of Code en Kadenze
//twitter: @_geosmina

var w;

function setup() {
  //Escenario
  createCanvas(800, 600);
  background(0);
  
  //Objetos
  w = new Walker();
  
}

function draw() {
  w.display();
}

//Walker class
function Walker(){
  //Crea un Walker en una parte al azar del canvas.
  this.pos = createVector(random(width), random(height));
  
  //Funciones
  this.display = function(){
    //Dibuja un círculo como un Walker
    fill(random(255), random(255), random(255));
    ellipse(this.pos.x, this.pos.y); //this.pos.x y .y se refiere a los atributos x y y de un createVector.
  };
}

