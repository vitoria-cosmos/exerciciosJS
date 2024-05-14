function calculaFatorial(numero) {
    let fatorial = 1;
    for (let inicio = 0; numero > inicio; numero--) {
        fatorial = numero * fatorial;
    }
    return fatorial;
}

console.log(calculaFatorial(10));