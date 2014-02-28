//Guerra, Andre 02/27/14 Functions - Wacky

//Find out how much beer the college kids will drink

var amount = prompt("How many kegs will be at the party?");

function calVolume(height,pi,radius) {
	var volume = height * pi * radius^2;
	return volume;
}

var beers = amount * 58.67 / 11.5;
beers = Math.ceil(beers * 10) / 10; //This isn't something we learned yet, but this snippet will round the number of beers up to the nearest 10th

var liters = calVolume(20,12,3.14);

console.log("The college party animals will drink a total of " + liters * amount + " liters of beer at the party. Which comes out to to a total of " + beers + " beers");