//Guerra, Andre 02/20/14 Conditionals - Worksheet

var temp = prompt("Enter a temperature to convert:");
var unit = prompt("Enter F or C for starting temp unit:");

var cTemp = (temp - 32) * 5 / 9;
var fTemp = temp * 9 / 5 + 32;

if (temp === "") {
	prompt("Oops! You forgot to enter a temperature. Please enter one now without the unit:");
}

if (unit === "") {
	prompt("Oops! You forgot to enter a unit. Please enter F or C:");
}

if (unit === "C") {
	console.log("The temparature you entered converts into " + fTemp + " degrees fahrenheit.");
}

if (unit === "F") {
	console.log("The temparature you entered converts into " + cTemp + " degrees celsius.");
}