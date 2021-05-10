let a=document.querySelector("#shatter");


a.addEventListener("click", e => {
  console.log(e.target) 
});

function shatterr(){
  document.getElementById("header1").innerHTML = "Shatter Amounts "
  document.getElementById("p1").innerHTML = "1 Gram: "
   document.getElementById("p2").innerHTML = "7g-Quarter: "
   document.getElementById("p3").innerHTML = "14g-Half: "
   document.getElementById("p4").innerHTML = "28g-Ounce: "
};