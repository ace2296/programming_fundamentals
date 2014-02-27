//Guerra, Andre 02/27/14 Functions - Worksheet


// Circle circumference

function circleCircumference() { //function set up
	const pi = 3.14; //constant that will always remain the same
	var radius = 20; //calculates circle circumference with 2pi*r
	var circumference = 2 * pi * radius; //calculates vars
	console.log("The circumference of the circle is " + circumference + " in.");//output result to the console
}

circleCircumference(); //call out the function

// Circle circumference v2 - arguments & perameters

circleCircumference2(3.14 , 10);

function circleCircumference2(pi , radius) {
	var circumference = 2 * pi * radius;
	console.log("The circumference of the circle is " + circumference + " in.");
}

//Bee Stings

function beeKill(vWeight) {
	var beeStings = 8.666666667;
	var animalKilled  = beeStings * vWeight;
	console.log("It takes " + animalKilled + " bee stings to kill this animal.");
}

beeKill(120);

//Bee Stings v2

var vWeight2 = 240; //set var for victim weight
var beeStings2 = 8.666666667; //set var for how man stings per pound it taks to kill and animal
var animalKilled2  = beeKill(beeStings2, vWeight2); //find the number of stings it takes based on the animal's weight
console.log("It takes " + animalKilled2 + " bee stings to kill this animal."); //output result

function beeKill(vWeight2, beeStings2) { //function that will be returned outside the function brackets
		return beeStings2 * vWeight2; //return value
	}