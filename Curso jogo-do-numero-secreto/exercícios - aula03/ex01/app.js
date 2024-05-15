function calculaIMC(peso, altura) {
    let imc = peso / altura ** 2;
    return imc.toFixed(2);
}

console.log(calculaIMC(70, 1.75));
