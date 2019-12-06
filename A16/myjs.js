function h()
{
  var grades = [76,90,86,59,95];
var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
      if (avg<=100)
          {
        
            document.getElementById("demo").innerHTML= "Your grade average is A";
          }
      if(avg <90)
          {
              
            document.getElementById("demo").innerHTML= "Your grade average is B";
          }
      if(avg <80)
          {
              
            document.getElementById("demo").innerHTML= "Your grade average is C";
          
          }
      if(avg <70)
          {
              
            document.getElementById("demo").innerHTML= "Your grade average is D";
          }
    
       if(avg <60)
          {
              total<60;
              document.getElementById("demo").innerHTML= "Your grade average is F";
          }
       if(total <50)
          {
              
              document.getElementById("demo").innerHTML= "Your grade average is E";
          }
}