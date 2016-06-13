//Vehicle Class

function Vehicle(x, y, m){
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.maxSpeed = 5;
	this.maxForce = 0.04;


	//Functions

	this.applyForce = function(force){
		this.acc.add(force);
	};

	//Move around.
	this.update = function(){
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	};

	this.display = function(){
		fill(255, 150);
		stroke(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	};

	this.seek = function(target){
		var desired = p5.Vector.sub(target, this.pos);
		desired.setMag(this.maxSpeed); //Scalar that sets the magnitude of the vector.
		var steering = p5.Vector.sub(desired, this.vel);
		steering.limit(this.maxForce);
		this.applyForce(steering);
	};
}