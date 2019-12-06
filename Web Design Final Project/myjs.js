function convert(clicked_id)
{
    var x = document.getElementById("input").value;
     if (isNaN(x)) 
      {
       document.getElementById("output").innerHTML="";
       alert("Input not valid please enter a number.");
       
      }
  

    
    
    if(clicked_id=="oz")
        {
          document.getElementById("output").innerHTML="";
          //Ounces
          x=x*0.035274;
          document.getElementById("output").innerHTML=x+" oz";
        }
    else if (clicked_id=="lB")
        {
          document.getElementById("output").innerHTML="";
          //pounds(lB)
          x=x*0.00220462;
          document.getElementById("output").innerHTML=x+" lB's";
        }
    else if (clicked_id=="CP")
        {
          document.getElementById("output").innerHTML="";
          //cups
          x=x*0.00423;
          document.getElementById("output").innerHTML=x+" cp";
        }
}