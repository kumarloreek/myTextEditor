let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("input",()=>{
   p.innerText=input.value;
});