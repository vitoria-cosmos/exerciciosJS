
const btFoco = document.querySelector('.foco');
const btCurto = document.querySelector('.descanso-curto');
const btLongo = document.querySelector('.descanso-longo');

const botoes = document.querySelectorAll('.buttons');
console.log(botoes);

btFoco.addEventListener('click', () => {
    mudaContexto(btFoco);
});

btCurto.addEventListener('click', () => {
    mudaContexto(btCurto);
});

btLongo.addEventListener('click', () => {
    mudaContexto(btLongo);
});

function mudaContexto(contexto) {
    botoes.forEach(function (botao) {
        botao.classList.remove('active');
    });
    contexto.classList.add('active');    
};
