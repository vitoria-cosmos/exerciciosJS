const html = document.querySelector('html');

const imagem = document.querySelector('.app__image');

const texto = document.querySelector('.app__title');

const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');


function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('scr', `./imagens/${contexto}.png`);
}

btFoco.addEventListener('click', function() {
    alterarContexto('foco');
texto.innerHTML = 

`Otimize sua produtividade,<br>
<strong class="app__title-strong">mergulhe no que importa.</strong>`;

});

btCurto.addEventListener('click', function() {
    alterarContexto('descanso-curto');
    texto.innerHTML = 
    `Que tal dar uma respirada? <br>
    <strong class='app__title-strong'> Faça uma pausa curta!</strong>`
});

btLongo.addEventListener('click', function() {
    alterarContexto('descanso-longo');
    texto.innerHTML = 
    `Hora de voltar à superfície. <br>
    <strong class='app__title-strong'> Faça uma pausa longa.</strong>`;
});
