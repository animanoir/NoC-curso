//Óscar A. Montiel
//The Nature of Code en Kadenze (Course, homework 2).
//twitter: @_geosmina
//github: https://animanoir.github.io/

var particula;

function setup() {
	particula = new Particle();

	createCanvas(800, 600);
	background(0);
}

function draw() {
	var gravity = createVector(0, 0.1);
	particula.applyForce(gravity);
	particula.display();
	particula.checkIfOutCanvasY();
	particula.update();
}

