//retrieve node in DOM via ID                                                   
var c = document.getElementById("slate");
var stp = document.getElementById("stop");
var zoomZoom = document.getElementById("animaniac");
var clr = document.getElementById("clear");
var DVD = document.getElementById("bounce");

                                                                              
//instantiate a CanvasRenderingCOntext2D object                                 
var ctx = c.getContext("2d");

//ID used by window.requestAnimationFrame()
var id;

//Initializes x and y coordinates used by various circles created in the functions below
var x = 300;
var y = 300;

//Initializes the radius used by various circles created in the functions below
var radius = 20;

//Initiazlies the color used by various circles created in the functions below
var color;

//Initializes the direction and speed of circle used in bounce()
var direction = 1;
var xspeed = 2.0;
var yspeed = 1.0;



/* 
==========================
METHODS: 
==========================
*/

//Draws a circle
var addCircle = function(xcor, ycor, radius) {
    //Sets up the circle with x and y cor of mouse and a radius of 20
    ctx.arc(xcor, ycor, radius, 0, 2*Math.PI);

};

/* ========================== */

//Draws for animaniac
var animaniac = function() {
    //Beginning
    ctx.beginPath();

    //Checking radius 
    console.log("radius: " + radius);

    //Create circle
    addCircle(x,y,radius);

    //Fill in circle with color
    ctx.fillStyle = color;   
    ctx.fill();    

    //Increase the size
    radius += 3;
    
    id = window.requestAnimationFrame(animaniac);
    console.log("Frame ID: " + id);  
};

/* ========================== */
//Move method for bounce 
var move = function() {
    //If x-cor goes outside of canvas's width:
    //Reverse direction, set new speed
    if ( (x > 600-radius) || (x < 0+radius) ) {
	if (x > 600 - radius) {
	    x = 600 - radius;
	}

	else {
	    x = 0 + radius;
	}
	    
	direction *= -1;
	xspeed = Math.random() * 2;
	//Random colors:
	var red = Math.floor( Math.random() * 255 );
	var green = Math.floor( Math.random() * 255 );
	var blue = Math.floor( Math.random() * 255 );
	//Fill the circle with black
	ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")"; 
    }

    //If y-cor goes outside of canvas's height:
    //Reverse direction, set new speed
    if ( (y > 600-radius) || (y < 0+radius) ) {
	if (y > 600 - radius) {
	    y = 600 - radius;
	}

	else {
	    y = 0 + radius;
	}
	  
	direction *= -1;
	yspeed = Math.random() * 2;

	//Random colors:
	var red = Math.floor( Math.random() * 255 );
	var green = Math.floor( Math.random() * 255 );
	var blue = Math.floor( Math.random() * 255 );

	//Fill the circle 
	color = "rgb(" + red + "," + green + "," + blue + ")";
	ctx.fillStyle = color;
    }

    //Change x and y 
    x += (xspeed * direction);
    y += (yspeed * direction);

    //Draw new circle
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
};

/* ========================== */
//DVD bouncing motion
var bounce = function() {
    //Beginning
    ctx.beginPath();

    //Clear canvas 
    ctx.clearRect(0, 0, 600, 600);

    //Create circle
    addCircle(radius);

    //Circle movement
    move(x,y);

    id = window.requestAnimationFrame(bounce);
    console.log(id);
    
};

/* ========================== */

//Stops the animation
var stop = function() {
    window.cancelAnimationFrame(id);;
};

/* ========================== */

//Clears the canvas
var clear = function() {
    radius = 20;
    console.log("clearing");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 600);
};
/* ========================== */

zoomZoom.addEventListener("click", animaniac);
stp.addEventListener("click", stop);
clr.addEventListener("click", clear);
DVD.addEventListener("click", bounce); 


    
