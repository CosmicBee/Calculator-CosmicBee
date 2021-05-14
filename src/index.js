let a=document.querySelector("#shatter");
a.addEventListener("click", e => {
  console.log(e.target) 
});

function shatterr(){
  let shatterElement=document.querySelector("#header1");
  let shatterCost=document.querySelector("#cost").value;
  let wWeight=document.querySelector("#weight").value;
  shatterElement.innerHTML = shatterCost;
let stimes= shatterCost*wWeight

  document.getElementById("header1").innerHTML = "Shatter "
  document.getElementById("p1").innerHTML = `1 Gram: $${stimes}` 
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
  let weedWeight=document.querySelector("#weight").value;
  weedElement.innerHTML = weedCostH;
  let gtimes= weedWeight*weedCostH

  document.getElementById("header1").innerHTML = "Weed"
  document.getElementById("p1").innerHTML = `1 Gram: $ ${gtimes}` 
  document.getElementById("p2").innerHTML = "Eighth: $  "
   document.getElementById("p3").innerHTML = "7g-Quarter: $ "
   document.getElementById("p4").innerHTML = "14g-Half: $ "
   document.getElementById("p5").innerHTML = "28g-Ounce: $ "
};



let g=document.querySelector("#gramm");

g.addEventListener("click", e => {
  console.log(e.target) 
});

function gramD(){

}



let threeg=document.querySelector("#threegs");

threeg.addEventListener("click", e => {
  console.log(e.target) 
});

function threeD(){
  
}


let eeighth=document.querySelector("#eighthh");

eeighth.addEventListener("click", e => {
  console.log(e.target) 
});

function eighthD(){
  
}



let q=document.querySelector("#quarterr");

q.addEventListener("click", e => {
  console.log(e.target) 
});

function quarterD(){
  
}


let h=document.querySelector("#halff");

h.addEventListener("click", e => {
  console.log(e.target) 
});

function halfD(){
  
}


let o=document.querySelector("#ouncee");

o.addEventListener("click", e => {
  console.log(e.target) 
});

function ounceD(){
  
}


let p=document.querySelector("#poundd");

p.addEventListener("click", e => {
  console.log(e.target) 
});

function poundD(){
  
}