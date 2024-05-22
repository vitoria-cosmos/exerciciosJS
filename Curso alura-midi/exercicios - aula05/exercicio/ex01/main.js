const teclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < teclas.length; contador++) {
    const tecla = teclas[contador];
    tecla.onclick = function() {
        tecla.classList.add('ativa');
    }
}




