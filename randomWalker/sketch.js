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

//Esto es una función para que camine.
this.walk = function() {
  var mouse = createVector(mouseX, mouseY);
  this.acc = p5.Vector.sub(mouse, this.pos); //La diferencia entre la posisión del objeto w (vector) y la posición del mouse (otro vector).
  this.acc.mult(0.1); //Se múltiplca la aceleración por un escalar.
  this.vel.add(this.acc);
  this.pos.add(this.vel);

}

//Esta es otra función para que se vea.
this.display = function() {
  fill(255);
  ellipse(this.pos.x, this.pos.y, 20, 20);
}
}