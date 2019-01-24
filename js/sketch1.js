var g=0;
var check=false;
var un=1;
function setup(){
  createCanvas(350,270);

  
}

function draw(){
	g=g+un;

	if(g==0){
        check=false;
	}
	if(g==90){
        check=true;
	}
	if(check==false){
		un=1;
	}
    else{
    	un=-1;
    }
	background(0,49,83);
	noFill();
	for(var posx=0; posx<width; posx=posx+50){
		stroke(random(255),190,160,250)
		for(var posy=0; posy<height; posy=posy+20){
			push();
			translate(posx,posy);
			scale(1.5)
			rotate(radians(g));
				ellipse(15,-3,15,15);
				triangle(5,10,10,15,3,15);
				line(0,19,5,10);
				line(0,3,9,14);
			pop()
		}
	}
}