function retanguloAreaEPerimetro(base, altura) {
    let area = base * altura;
    let perimetro = (base * 2) + (altura * 2);
    return `A área do retângulo é igual a ${area} e o perimetro é igual a: ${perimetro}`;
}

console.log(retanguloAreaEPerimetro(10, 5));