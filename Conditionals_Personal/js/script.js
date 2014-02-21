//Guerra, Andre 02/19/14 Conditionals - Personal

var milesRan = prompt("How many miles did you run today?"); //Gets user input for miles ran
var weight = prompt("How much do you weigh in pounds?"); //Gets users weight
var caloriesBurned = (0.75 * weight) * milesRan; //By taking 0.75 and multiplying it by the user's weight and multiplying that total number by total miles run. You will get an acurate calories burned output.
var goal = prompt("How many calories do you want to burn on your run?"); //Sets if statement goal
var completePercent = 100; //default value at 100 percent of goal

completePercent /= goal; //This will give the actual percent of goal hit. This will only display i fthe use rhas not hit their calories burned goal

if (milesRan === "") { //Check if miles ran is empty
		var milesRan = prompt("Oops! It looks like you forgot to enter the amount of miles your ran today. Please enter them now:"); //Prompt the user to input a miles value
}

if (weight === "") { //Check if weight is empty
		var weight = prompt("Oops! It looks like you forgot to enter weight. Please enter it now:"); //Prompt the user to input a weight value
}

if (goal === "") { //Check if goal is empty
		var goal = prompt("Oops! It looks like you forgot to enter your calorie burned goal. Please enter one now:"); //Prompt the user to input a goal value
}

(caloriesBurned >= goal) ? console.log("Congratulations! You have burned " + caloriesBurned +" calories. You have reached your goal.") : console.log("Keep those feet moving! You have only completed " + completePercent +"% of your burned goal"); //Ternary is checking to see if total calories burned are greater than or equal to the user's goal