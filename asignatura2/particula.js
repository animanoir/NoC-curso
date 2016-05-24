function Particle () {
	this.pos = createVector(random(800), random(600));
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	

	
	//Funtions
	this.applyForce = function(force){
		this.acc = force;
	};

	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	};

	this.display = function(){
		fill(random(255), random(255), random(255));
		ellipse(this.pos.x, this.pos.y, 50, 50);
	};

	this.checkIfOutCanvasY = function(){
		if(this.pos.y > height){
			this.pos.y = 0;
			this.pos.x = random(width);
		}
	};
}