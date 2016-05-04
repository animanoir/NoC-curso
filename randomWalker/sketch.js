function setup() {
  createCanvas(640, 360); //Crea el canvas en HTML para que se vea todo.
  w = new Walker();

}

function draw() {
  background(0);
  w.walk();
  w.display();
}

//Como si fuera una clase, ¡pero en JavaScript!
function Walker() {
  this.pos = createVector(width / 2, height / 2); //Función que sirve para crear un vector con dos variables, x y y.
  this.vel = createVector(0, 0); //Velocidad
  this.acc = createVector(0, 0.1); //Aceleración
// this.x = width/2;
// this.y = height/2;

//Esto es una función para que camine.
this.walk = function() {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
//  this.pos.x += random(-5, 5);
//  this.pos.y += random(-5, 5);

}

//Esta es otra función para que se vea.
this.display = function() {
  fill(255);
  ellipse(this.pos.x, this.pos.y, 20, 20);
}
}