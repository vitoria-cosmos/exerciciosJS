contador = 0;

function incrementarContador() {
    contador += 1;
    console.log(contador);
}

const teclas = document.querySelectorAll('.tecla');


// console.log(teclas);
for (let cont = 0; cont < teclas.length; cont++){ 
    teclas[cont].onclick = function() {
        incrementarContador();
    }   
}

