function check()
{
    var x=document.getElementById("num1").value;
    var y=document.getElementById("num2").value;
     if(isNaN(x)||isNaN(y))
     {
       alert("Input not valid");
     } 
    
    if((x*y*52)<20000)
        {
            document.getElementById("output").innerHTML = "The salary is "+ x*y*52 +" ,the salary is to little";
        }
    else if((x*y*52)>20000 && (x*y*52)<25000)
        {
            document.getElementById("output").innerHTML = "The salary is "+ x*y*52 +" ,the salary is almost enough. Let’s negotiate.";
        }
    else if((x*y*52)>25000)
        {
            document.getElementById("output").innerHTML = "The salary is "+ x*y*52 +" ,this is a great salary for me";
        }
}
function jd(item, index)
{
  document.getElementById("output").innerHTML = "";
  var jobD = ["Lumber","Forklift","Customer Sevice","Loader","Online Training"]; 
  var text ="";
  var i=0;
  jobD.forEach(myFunction);

function myFunction(item, index) 
{
  var un = document.getElementById("num1").value -1;
  if(index <=un)
  document.getElementById("output").innerHTML += item + "<br>"; 
} 
}  
function jd2(item, index)
{
  document.getElementById("output").innerHTML = "";
  var jobD = ["Inspector","Setup","info","Checking in voters","Handing out ballots"]; 
  var text ="";
  var i=0;
  jobD.forEach(myFunction2);

function myFunction2(item, index) 
{
  var un2 = document.getElementById("num2").value -1;
  if(index <=un2)
  document.getElementById("output2").innerHTML += item + "<br>"; 
} 
}  

  