//get "body" div using getElementById, put it inside a variable
//make the variable listen for a click
//when it hears click, trigger onclick function that
//changes color of body and adds a border

var el = document.getElementById('body')
el.addEventListener("click", Animate1)

//get "C2" div using getElementById, put it inside a variable
//make the variable listen for a click
//when it hears click, trigger onclick function that
//changes color of C2 and makes it disappear 

var el2 = document.getElementsById('C2')
el2.addEventListener("click", Animate2)

function Animate1(){
  el.style.backgroundColor = "#1f1c1a";
  el.style.border = "6px solid white";
}

function Animate2(){
  el2.style.backgroundColor = "#1f1c1a";
}
