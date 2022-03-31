function compute() {
  // Primary function to compute the values entered by the user

// ##### Main variables
  // Capture the principal value entered by the user
    var principal = document.getElementById("principal").value;
  // Capture the rate entered
    var rate = document.getElementById("rate").value;
  // Capture the value entered for years
    var years = document.getElementById("years").value;
  // Stores the current year for the form
    var currentYear = "2022";

// ### Calculations and validations performed
  //The variable newYear calculates the current year adding the years variable to the current year
    var newYear = Number(currentYear) + Number(years);

  // If statements to determine if the user has entered a principle value greater than zero
     if (principal == "") {
       alert ("Please enter a principal amount");
       return false;
     }
     if (principal <= "0") {
       alert ("Please enter a positve number greater than zero");
       return false;
     }

    // Calculate the interest based on the values entered by the user for principal, years and rate
    var interest = principal * years * rate/100;

    // Prints out the results for the user to review
    document.getElementById("result").innerHTML="\<br/>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year  "+newYear+" \<br\>"

}

// function to add the correct interest rate to the slider input
function updateRate() {
  // Grab the initial value
  var rateeval = document.getElementById("rate").value;
//  Add the adjusted value for display next to the slider
  document.getElementById("rate_val").innerText = rateeval;

}
