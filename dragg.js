function dragstart(e)
{ e.dropEffect = "copy";
 e.dataTransfer.setData("text/plain",e.target.id);
 
   

}
function dragover(e)
{
  e.preventDefault();
 
  
   e.dataTransfer.dropEffect = "copy";
   var t=document.getElementById("di");
   t.innerHTML="";
 e.target.style.border="5px solid purple";
  
}
  function dragg(e)
  {var d=e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(d));
  e.target.style.backgroundColor="skyblue";
  e.preventDefault();
 
  }
  function dragleave(e)
  { e.target.style.border="2px solid red";
  var t=document.getElementById("di");
   var y=document.getElementById("ew");
   t.innerHTML="what happen u dont what to drag";
      }  
  
  
