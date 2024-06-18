const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');

const startPauseBt = document.querySelector('#start-pause');


const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

let contagem = 5;
let intervaloId = null;

const musicaPlay = new Audio('./sons/play.wav');
const musicaPause = new Audio('./sons/pause.mp3');
const musicaStopped = new Audio('./sons/beep.mp3');


musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
    
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
    
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
    
});

function alterarContexto(contexto) {
    botoes.forEach(function (botao) {
        botao.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade, <br> <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície. <br> <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break
        default:
            break;

    };  
    
};

function contagemRegressiva() {
    if (contagem <= 0) {
        interrompeContagem();
        musicaStopped.play();
        alert('Timeout');
        musicaStopped.pause();
        return;

    }
    contagem -= 1;
    console.log('contagem: ', contagem );

}

startPauseBt.onclick = function() {
    musicaPlay.play();
    iniciarOuPausar();
}

function iniciarOuPausar() {
    if (intervaloId) {
        musicaPlay.pause();
        musicaPause.play();
        interrompeContagem();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);

}

function interrompeContagem() {
    clearInterval(intervaloId);
    intervaloId = null;
}

