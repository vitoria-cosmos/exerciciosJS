
const btFoco = document.querySelector('.foco');
const btCurto = document.querySelector('.descanso-curto');
const btLongo = document.querySelector('.descanso-longo');

const botoes = document.querySelectorAll('.buttons');

btFoco.addEventListener('click', () => {
    btFoco.classList.add('active');

});

btCurto.addEventListener('click', () => {
    btCurto.classList.add('active');
});

btLongo.addEventListener('click', () => {
    btLongo.classList.add('active');
});

