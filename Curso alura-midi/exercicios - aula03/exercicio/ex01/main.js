
let contador = 0;

function incrementarContador() {
    contador += 1;
    console.log(contador);
}

let butao = document.querySelector('button');

butao.onclick = function() {
    incrementarContador();
}
