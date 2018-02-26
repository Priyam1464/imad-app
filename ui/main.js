console.log('Loaded!');
var counter=0;
var button=document.getElementById('butt');
var element=document.getElementById('me');
button.onClick(function()
{
   counter+=1;
   element.innerHTML(counter.toString());
});