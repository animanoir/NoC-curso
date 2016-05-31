function Particula (x, y, m) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.mass = 1; //Escalar

	//Functions

	//Apply a force, for the object to move in an x or y axis (or both).
	this.applyForce = function(force){
		var f = force.copy(); //Crea una copia de force para que no afecte la variable original
		//a=(∑F)/m).
		force.div(this.mass);
		this.acc.add(force);
	};

	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		this.acc.set(0, 0);
	};

	this.display = function(r, g, b){
		noStroke();
		fill(r, g, b, 182);
		ellipse(this.pos.x, this.pos.y, m*this.mass, m*this.mass);
	};

	this.checkIfOutCanvasXY = function(){
		if(this.pos.y > height){
			this.vel.y *= -1;
			this.pos.y = height;
		}
		if(this.pos.x > width){
			this.vel.x *= -1;
			this.pos.x = width;
		}else if(this.pos.x < 0){
			this.vel.x *= -1;
			this.pos.x = 0;
		}
	};
}