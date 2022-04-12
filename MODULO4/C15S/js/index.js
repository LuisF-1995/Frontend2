/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implementar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcoded y hacerlo dinámico)

- constantemente guardar la información en localStorage, si se recarga la pagina deberían mantenerse los comentarios
*/

const nodeForm = document.querySelector('form');
const nodeInputComment = document.querySelector('#comentario');
const nodeContainerComments = document.querySelector('.comentarios');
const nodeDeleteButton = document.querySelector('#delete');
const nodeError = document.querySelector('#error');

let comments = [];

window.addEventListener('load', () => {
    let localStorageUser = localStorage.getItem('comments_history');

    if (localStorageUser !== null) {
        comments = JSON.parse(localStorageUser);
        comments.forEach(comment => {
            renderComments(comment);
        });
    }
})

nodeDeleteButton.addEventListener('click', deleteHistory);

nodeForm.addEventListener('submit', (e) => {

    e.preventDefault();

    if (validateField(nodeInputComment.value)) {
        comments.push(nodeInputComment.value);
        renderComments(nodeInputComment.value);
    }
    saveHistory('comments_history', JSON.stringify(comments));

    nodeForm.reset();
});

function renderComments(comment) {
    let p = document.createElement('p');
    p.textContent = comment;
    nodeContainerComments.appendChild(p);
}

function saveHistory(key, value) {
    localStorage.setItem(key, value);
}

function deleteHistory() {
    localStorage.clear();
    nodeContainerComments.innerHTML = '';
    window.location.reload();
}

function validateField(value = '') {
    
    let result = true;

    if (value.length < 3) {
        result = false;
        nodeError.classList.remove('oculto');
    }

    setTimeout(()=> {
        nodeError.classList.add('oculto');
    }, 2500);

    return result;
}

