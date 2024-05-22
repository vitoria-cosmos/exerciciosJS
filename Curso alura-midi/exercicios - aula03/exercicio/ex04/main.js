contador = 0;

function incrementarContador() {
    contador += 1;
    console.log(contador);
}

const teclas = document.querySelectorAll('.tecla');

cont = 0;
// console.log(teclas);
while (cont < teclas.length) { 
    teclas[cont].onclick = function() {
        incrementarContador();
    }
    cont += 1;
}

