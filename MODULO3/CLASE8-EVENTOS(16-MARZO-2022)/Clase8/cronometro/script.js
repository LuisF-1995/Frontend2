let n = 0;
let crono = document.getElementById("number");
let cont = setInterval(function(){
  crono.innerHTML = n++;
},100); //la funcion se va a reproducir cada 1000 ms
 
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{clearInterval(cont)});