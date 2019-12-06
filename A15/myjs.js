function h()
{
  var points = ["5","7","9"];
  var i=0;
  var text="";
    while (i<points.length)
    {
      text+=points[i]+" ";  
      i++;
    } 
    document.getElementById("demo").innerHTML=text;
}
function v()
{
    var points = ["5","7","9"];
  var i=0;
  var text="";
    while (i<points.length)
    {
      text+=points[i]+"<br>";  
      i++;
    } 
    document.getElementById("demo").innerHTML=text;
}