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