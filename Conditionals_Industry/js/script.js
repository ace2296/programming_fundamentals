//Guerra, Andre 02/20/14 Conditionals - Industry

var budget = prompt("What is your total computer budget?");
var employees = prompt("How many employees will need computers?");

var perEmpBudget = budget / employees;

if (perEmpBudget >= 900 ) {
	console.log("You are able to buy everyone a MacBook Air!")
	} else if (perEmpBudget >= 1500) {
		console.log("You are able to buy everyone a MacBook Pro!");
	} else if (perEmpBudget >= 2000) {
		console.log("You are able to buy everyone a Mac Tower!");
	} else {
	console.log("It looks like your buying everyone a PC.") ;
}