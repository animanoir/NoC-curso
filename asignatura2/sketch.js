//Óscar A. Montiel
//The Nature of Code en Kadenze (Course, homework 2).
//twitter: @_geosmina
//github: https://animanoir.github.io/


var particulasRojas = [];
var particulasAzules = [];
var cantidad = 200;

function setup() {
	for (var i = 0; i < cantidad; i++) {
		particulasRojas[i] = new Particula(random(800), random(600), random(10, 50));
	}
	for (var i = 0; i < cantidad; i++) {
		particulasAzules[i] = new Particula(random(800), random(600), random(10, 50));
	}

	createCanvas(800, 600);

}

function draw() {
	background(0);
	//Gravity variable
	var gravity = createVector(0, 1);
	var windRed = createVector(0.2, 1);
	var windBlue = createVector(-0.2, 1);

	for (var i = 0; i < particulasRojas.length; i++) {
		particulasRojas[i].applyForce(gravity);
		particulasRojas[i].display(255, 0, 0);
		particulasRojas[i].checkIfOutCanvasXY();
		particulasRojas[i].update();
	}
	for (var i = 0; i < particulasAzules.length; i++) {
		particulasAzules[i].applyForce(gravity);
		particulasAzules[i].display(0, 0, 255);
		particulasAzules[i].checkIfOutCanvasXY();
		particulasAzules[i].update();
	}

	if (mouseIsPressed) {
		for (var i = 0; i < particulasRojas.length; i++) {
			particulasRojas[i].applyForce(windRed);
			particulasAzules[i].applyForce(windBlue);
		}
	}
}

function keyPressed(){
	setup();
}

