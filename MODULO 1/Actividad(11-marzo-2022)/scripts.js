// const tema = confirm('Desea aplicar el tema claro?');

// if (tema) {
//   document.querySelector('body').classList.remove('dark')
// }







let modo=document.getElementById("modo");
modo.addEventListener("click",()=>{document.querySelector('body').classList.toggle('dark')})