//Guerra, Andre 02/20/14 Conditionals - Worksheet

//Temperature Converter - Group 1

var temp = prompt("Enter a temperature to convert:"); //Beginning temp to convert
var unit = prompt("Enter F or C for starting temp unit:"); //Starting unit to conver from

var cTemp = (temp - 32) * 5 / 9; //Formula to convert celsius to fahrenheight
var fTemp = temp * 9 / 5 + 32;//Formula to convert fahrenheight to celsius

if (temp === "") { //Check to see if temp var is empty
	prompt("Oops! You forgot to enter a temperature. Please enter one now without the unit:");
}

if (unit === "") { //Check to see if unit var is empty
	prompt("Oops! You forgot to enter a unit. Please enter F or C:");
}

if (unit === "C") { //Convert C to F
	console.log("The temparature you entered converts into " + fTemp + " degrees fahrenheit.");
}

if (unit === "F") { //Convert F to C
	console.log("The temparature you entered converts into " + cTemp + " degrees celsius.");
}

//Check the Login - Group 2

var username = prompt("Please enter your username:"); //User enter username
var password = prompt("Please enter your password:"); //User enters password

if (username === "admin" && password === "fuzzyduck") { //Check if username and password is correct
	console.log("Welcome, " + username + "!"); //Welcome message
}

if (username != "admin") { //Check id username is incorrect
	console.log("User not found. Try again.");
}

if (password != "fuzzyduck") { //Check id password is incorrect
	console.log("Password does not match our records.");
}

//Movie Ticket Price

var time = prompt("What time is your movie showing?"); //User prompt for movie time to determine time discount
var age = prompt("What is your age?"); //User prompt for movie time to determine age discount

var timeDiscount = false; //Default Boolean
var ageDiscount = false; //Default Boolean

if (time <= 5 && time >= 3) { //Determine if the user is seeing the movie between 3 and 5
	timeDiscount = true; //Set true if so
}

if (age >= 55) { //Determine if the user is above or equal to the age fo 55
	ageDiscount = true; //They get a discount if so
}

(timeDiscount || ageDiscount) ? console.log("Your ticket price is $7.") : console.log("Your ticket price is $12."); //Ternary operator for discount outcome