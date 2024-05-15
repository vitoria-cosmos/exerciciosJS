function circuloAreaEPerimetro(raio) {
    pi = 3.14
    let area = pi * (raio**2);
    let perimetro = 2 * pi * raio;
    return `A área do círculo é igual a: ${area} e seu perímetro é igual a: ${perimetro}`;
}

console.log(circuloAreaEPerimetro(2));