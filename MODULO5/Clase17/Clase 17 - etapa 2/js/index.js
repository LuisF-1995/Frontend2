const btn = document.querySelector('#random');
const tarjeta = document.querySelector('.tarjeta')

const apiUrl = 'https://dog.ceo/api/breeds/image/random/5';


function peticion(url) {
    
        fetch(url).then( respuesta => {
            console.log(respuesta);
            return respuesta.json()
        })
        .then( datos => {
            tarjeta.innerHTML="";
            console.log(datos);
            let arrayPerritos=datos.message;
            console.log(arrayPerritos)
            for(let i=0;i<arrayPerritos.length;i++){
                tarjeta.innerHTML+=`<img src="${arrayPerritos[i]}" alt="imagen de un perro">`
                       
              
            }
            // modficamos la UI agregando la imagen que nos llegó en la peticion
        })
        .catch( error => {
            //Aca recibimos algo que viene rechazado(Ejemplo: "Problema X")
            console.log(error);
        });
    

};

//escuchamos el click del boton para disparar la peticion
btn.addEventListener('click', function() {
    peticion(apiUrl);
})