var el = document.getElementById('info');{
  if(el){
  el.addEventListener("mouseover", ChangeFont);

  function ChangeFont(){
  	el.style.color = "purple";
  }  
}
