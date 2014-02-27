//Guerra, Andre 02/27/14 Functions - Industry

//px to em converter

function converter(px) { //Set function for user to enter a pixel value
	var em = 0.063; //Sets the amount of ems per pixel
	var result = px * em; //Get the result of ems per pixel
	console.log (px + "px converts into " + result + "em."); //Output result
}

converter(prompt('what is the pixel amount you want to convert?')); //Call-out function and ask for the beginningpixel amount to convert

