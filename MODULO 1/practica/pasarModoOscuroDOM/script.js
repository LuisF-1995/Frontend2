let modoOscuro = confirm('¿Desea cambiar a modo oscuro?')

let h1Dark = document.querySelector("h1");
let items = document.getElementsByClassName("item");
// let item2 = document.querySelectorAll(".item")[2]; para modificar solo un atributo
let parrafos = document.getElementsByTagName("p");

if (modoOscuro){
    document.body.classList.add('dark');
    h1Dark.classList.add('tituloOscuro');

    for (let item of items){
        item.classList.add('itemOscuro');
    }

    for (let parrafo of parrafos){
        parrafo.classList.add('pOscuros');
    }

}else{
    document.body.classList.remove("dark");
}
