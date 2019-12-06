function check()
{
    var x=document.getElementById("num1").value;
    var y=document.getElementById("num2").value;
    
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