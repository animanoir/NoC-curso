//Óscar A. Montiel
//The Nature of Code, (Course, homework 3).
//twitter: @_geosmina
//github: https://animanoir.github.io/

var vehicle; //An autonomous agent

function setup() {
  createCanvas(800, 600); //Creates the canvas where everything will happen.
  vehicle = new Vehicle(320, 180);

}

function draw() {
  background(0);

  var target =  createVector(mouseX, mouseY); //The target will be the mouse position.

  vehicle.seek(target); //Will seek the target.
  vehicle.update();
  vehicle.display();

}
