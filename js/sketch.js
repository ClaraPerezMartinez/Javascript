var g=0;
function setup(){
	createCanvas(displayWidth,displayHeight);
}
function draw(){
	background(255);
	strokewight(mouseX);
	point(100,200);
	line(width/2,height/2,width,0);
	rectMode(CENTER); /*se construye el punto desde el centro del rectangulo*/
	rect(200,200,50,100); /*x,y,ancho y alto*/ /*desde el punto superior izq*/
	noFill(); /*sin relleno*/ /*fill()-color de relleno*/ /*stroke()-color de trazo*/
	ellipse(200,200,100,50);
	triangle(200,0,400,0,300,100);
	quad(300,100,width/2,height/2,250,300,100,200); /*cuadrilatero*/
	arc(100,500,100,100,radians(0)), radians(180),CHORD); /*forma quesito trivial.-x,y,w,h,punto de inicio, punto final*/
}