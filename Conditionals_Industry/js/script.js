//Guerra, Andre 02/20/14 Conditionals - Industry

var budget = prompt("What is your total computer budget?"); //Sets the total computer budget
var employees = prompt("How many employees will need computers?"); //This will be the number the budget is divided into

var perEmpBudget = budget / employees; //Get the total amount you can spend per employee

if (perEmpBudget >= 900 ) { //If per employee budget is greater than $900
	console.log("You are able to buy everyone a MacBook Air!"); //Outcome for budget $900
	} else if (perEmpBudget >= 1500) { //Outcome for budget $1500
		console.log("You are able to buy everyone a MacBook Pro!"); // Result of a Budget between 1500 and 2000
	} else if (perEmpBudget >= 2000) { //Outcome for budget $2,000
		console.log("You are able to buy everyone a Mac Tower!"); // Result of a Budget of $2000 +
	} else {
	console.log("It looks like your buying everyone a PC.") ; // Result of a Budget below $900
}