contador = 0;

function incrementarContador() {
    contador += 1;
    console.log(contador);
}

const teclas = document.querySelectorAll('.tecla');

// console.log(teclas);
teclas[3].onclick = function() {
    incrementarContador();
}

