console.log('Loaded!');
var counter=0;
var element=document.getElementById('me');
element.onClick(function()
{
   counter+=1;
   element.innerHTML(counter.toString());
});