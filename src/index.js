let a=document.querySelector("#shatter");
let b= document.getElementById("input");



a.addEventListener("click", e => {
  console.log(e.target) 
});

function shatterr(){
  
  document.getElementById("header1").innerHTML = "Shatter "
  document.getElementById("p1").innerHTML = `1 Gram: $${b}` 
  document.getElementById("p2").innerHTML = "3G: $ "
   document.getElementById("p3").innerHTML = "7g-Quarter: $ "
   document.getElementById("p4").innerHTML = "14g-Half: $ "
   document.getElementById("p5").innerHTML = "28g-Ounce: $ "
};




let w=document.querySelector("#weed");

w.addEventListener("click", e => {
  console.log(e.target) 
});

function weedd(){
  
  document.getElementById("header1").innerHTML = "Weed"
  document.getElementById("p1").innerHTML = `1 Gram: $` 
  document.getElementById("p2").innerHTML = "Eighth: $ "
   document.getElementById("p3").innerHTML = "7g-Quarter: $ "
   document.getElementById("p4").innerHTML = "14g-Half: $ "
   document.getElementById("p5").innerHTML = "28g-Ounce: $ "
};