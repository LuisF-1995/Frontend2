/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/


let comentarios = [];

document.querySelector("button").addEventListener('click', function(evento)
    {
        evento.preventDefault();
        let comentario = document.querySelector('input#comentario');
        let comentarioCaptado = comentario.value.trim();
        comentarios.push(comentarioCaptado);
        console.log(comentarios);



        renderizarComentarios = document.querySelector(".comentarios");
        renderizarComentarios.innerHTML = ``;

        function baseComentarios(comentario) {
            let renderizarComentarios = document.querySelector(".comentarios");
            const templateCaja = `<p>${comentario}</p>`;
            renderizarComentarios.innerHTML += templateCaja;
        }
        
        comentarios.forEach(iterador => baseComentarios(iterador));
        

        let comentariosString = JSON.stringify(comentarios);
        localStorage.setItem('comentarios', comentariosString);

});



