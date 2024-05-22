const teclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < teclas.length; contador++) {
    const tecla = teclas[contador];
    tecla.onclick = function() {
        if (tecla.classList[tecla.classList.length - 1] === 'ativa') {
            tecla.classList.remove('ativa');
        } else {
            tecla.classList.add('ativa');
        }
    }   
}




