//Guerra, Andre 02/20/14 Conditionals - Industry

var leadGoal = prompt("What is your desired lead goal?");
var visits = prompt("How many website visitors did you get this month?");
var blogs = prompt("How many blogs did you publish?");
var leadsGenerated = prompt("How many leads did you recieve from your blogs this month?");
var leadActual = (visits / blogs) * conversionPercent;
var conversionPercent = 0.10;
var remainingLeads = leadGoal % leadsGenerated; 

if (leadsGenerated >= leadGoal ) {
	console.log("Congratulations! You've hit your lead goal with a total of" + leadsGenerated + " leads.")
} else {
	console.log("It looks like your " + remainingLeads + " leads away from hitting your lead goal.") ;
}