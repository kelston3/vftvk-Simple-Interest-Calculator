function compute()
{
  //  p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100;

    document.getElementById("result").innerHTML = "If you deposit "+principle 
}


function updateRate() {

  var rateeval = document.getElementById("rate").value;
//  var rateeval =7;
  document.getElementById("rate_val").innerText = rateeval;

}
