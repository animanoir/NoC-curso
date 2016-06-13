//Stone class
//Used code for 2D water simulation by http://www.openprocessing.org/user/25336
//From P5 to p5.js translation by Óscar A. Montiel

function Stone(p){
	this.pos = p.copy();
	this.vel = createVector(0, 2);
	this.acc = createVector(0, 0.25);
	this.alpha = 255;

	//Functions
	this.run = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.display();
	};

	this.display = function(){
		noStroke();
		fill(255, this.alpha);
		ellipse(this.pos.x, this.pos.y, 50, 50);
	};
}