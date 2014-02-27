//Guerra, Andre 02/27/14 Functions - Industry

//px to em converter with 16px base pixel size

var unit = prompt("Which unit do you want to start with in your convertion? Please enter em or px."); //Kickoff the if statement/function

if (unit === "px") {
	function pxConverter(px) { //Set function for user to enter a pixel value
		var pxResult = px * 0.75; //Multiplies the amount of pixels per em
		console.log (px + "px converts into " + pxResult + "em."); //Output result
	}	
	pxConverter(prompt('What is the pixel amount you want to convert into ems?')); //Call-out function and ask for the beginningpixel amount to convert
} else {
	function emConverter(em) { //Set function for user to enter a pixel value
		var emResult = em * 16; //Multiplies the amount of pixels per em
		console.log (em + "em converts into " + emResult + "px."); //Output result
	}
	emConverter(prompt('What is the em amount you want to convert into pixels?')); //Call-out function and ask for the beginningpixel amount to convert
}