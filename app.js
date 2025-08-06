// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;

    if (nombre.trim() === '') {
        alert('Ingrese un nombre válido');
    } else {
        amigos.push(nombre);
        input.value = '';
        actualizarListaAmigo();
    }
}

function actualizarListaAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li> ${amigos[i]} </li>`;
    }
    }

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista esta vacía');
        return;
    } else {
        let indice = Math.floor(Math.random()* amigos.length);
        let nombreSorteado = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${nombreSorteado}</li>`;
    }
}