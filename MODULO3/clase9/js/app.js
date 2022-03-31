window.addEventListener('load', function () {


    /* -------------------------------- variables ------------------------------- */
    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    let valor = document.querySelector("#valor");
    let btnIniciar = document.getElementById("iniciar");
    let btnPausa = document.getElementById("pausa");
    let btnStop = document.getElementById("stop");
    let btnAcelerar = document.getElementById("acelerar");
    let times = document.getElementById("times");


    /* -------------------------------- LISTENERS ------------------------------- */
    btnIniciar.addEventListener('click', function () {
        console.log("click");
        play();
    });
    btnStop.addEventListener('click', reiniciar);
    btnPausa.addEventListener('click', pausar);
    btnAcelerar.addEventListener('click', acelerar);



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
        valor.innerText = contador;
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
        clearInterval(cronometro);
        tiempo = tiempo / 2;
        play();
    };
});