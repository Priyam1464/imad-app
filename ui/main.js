
var counter=0;
var button=document.getElementById('butt');
var element=document.getElementById('me');
button.onClick=function()
{
   counter=counter+1;
   element.innerHTML=counter.toString();
};