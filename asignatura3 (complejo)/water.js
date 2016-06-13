//Water class
//Used code for 2D water simulation by http://www.openprocessing.org/user/25336
//From P5 to p5.js translation by Óscar A. Montiel

function Water(x, y, h, th, s){
	this.targetHeight = h;
	this.h = th;
	this.spd = s;
	this.x = x;
	this.y = y;

	//Functions
	this.update = function(damp, ten){
		this.x = this.targetHeight-this.h;
		this.spd += ten*this.x-this.spd*this.damp;
		this.h += this.spd;
	};

	this.display = function(){
		stroke(0, 0, 255, 255-h/2);
		strokeWeight(10);
		beginShape(LINES);
		vertex(x, h);
		vertex(x+5, h);
		endShape();
	};
}