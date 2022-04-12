window.addEventListener('load', function () {
    
    /* -------------------------------- variables ------------------------------- */
    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    let valor=document.querySelector("#valor");
    let btnIniciar=document.getElementById("iniciar");
    let btnPausa=document.getElementById("pausa");
    let btnStop=document.getElementById("stop");
    let times=document.getElementById("times");
    let btnacelerar=document.getElementById("acelerar");
    
    /* -------------------------------- LISTENERS ------------------------------- */
    btnIniciar.addEventListener('click', function () {
        console.log("click");
        play();
    }); 
    btnStop.addEventListener('click', reiniciar);
    btnPausa.addEventListener('click', pausar);
    btnacelerar.addEventListener('click', acelerar);

    /* -------------------------------------------------------------------------- */
    /*                                  FUNCIONES                                 */
    /* -------------------------------------------------------------------------- */
    //definimos la funcionalidad de iniciar el cronometro
    function play() {
        cronometro = setInterval(function () {
            contador++;
            console.log(contador);
            renderizar();
        }, tiempo);
    };
    
    // difinimos la responsabilidad de la funcion renderizar
    function renderizar() {
       valor.innerText=contador;
    }

    // definimos la funcion de pausar
    function pausar() {
     clearInterval(cronometro);
    
    }

    // definimos la funcionalidad del boton stop
    function reiniciar() {
        clearInterval(cronometro);
        times.innerHTML += `<small>Tiempo: ${contador}</small>`
        contador = 0;
        renderizar();
    }

    // definimos la funcionalidad de acelerar
    // - duplicar la velocidad del cronometro
    // - que se puede seguir multiplicando(duplicando la velocidad)
    
    function acelerar() {
        cronometro = setInterval(function () {
            contador++;
            console.log(contador);
            renderizar();
        }, tiempo/2);
    }

});








// valor.innerText = contador;

// clearInterval(cronometro);

// const valor = document.querySelector('#valor');
// const btnIniciar = document.querySelector('#iniciar');
// const btnStop = document.querySelector('#stop');
// const btnPausa = document.querySelector('#pausa');
// const times = document.querySelector('#times');