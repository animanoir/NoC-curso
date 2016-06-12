//Óscar A. Montiel
//The Nature of Code en Kadenze (Course, homework 3).
//twitter: @_geosmina
//github: https://animanoir.github.io/

var vehicle; //An autonomous agent

function setup() {
  createCanvas(800, 600); //Creates the canvas where everything will happen.
  vehicle = new Vehicle(320, 180);

}

function draw() {
  background(0);

  vehicle.update();
  vehicle.display();

}
