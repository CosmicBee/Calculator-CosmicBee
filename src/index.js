
a.addEventListener("click", e => {
  console.log(e.target) 
});

function shatterr(){
  let shatterElement=document.querySelector("#header1");
  let shatterCost=document.querySelector("#cost").value;
  shatterElement.innerHTML = shatterCost;

  document.getElementById("header1").innerHTML = "Shatter "
  document.getElementById("p1").innerHTML = `1 Gram: $${shatterCost}` 
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
  let weedElement =document.querySelector("#header1");
  let weedCostH = document.querySelector("#cost").value;
  weedElement.innerHTML = weedCostH;

  document.getElementById("header1").innerHTML = "Weed"
  document.getElementById("p1").innerHTML = `1 Gram: $ ${weedCostH}` 
  document.getElementById("p2").innerHTML = "Eighth: $ "
   document.getElementById("p3").innerHTML = "7g-Quarter: $ "
   document.getElementById("p4").innerHTML = "14g-Half: $ "
   document.getElementById("p5").innerHTML = "28g-Ounce: $ "
};





