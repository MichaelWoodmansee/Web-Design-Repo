function greetings(){
   var d = new Date();
   var h=d.getHours();
    if(h<12)
        {
            alert("Good Morning");
        }
    else if (h>12 && h<5)
        {
            alert("Good Afternoon");
        }
    else
        {
            alert("Good Evening");
        }
}
