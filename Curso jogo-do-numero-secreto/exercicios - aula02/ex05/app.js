function maiorNumero(num1, num2){
    let maior;
    if (num1 > num2) {
        maior = num1;
        console.log(`Entre ${num1} e ${num2}, o maior número é ${maior};`);
    } else {
        maior = num2;
        console.log(`Entre ${num1} e ${num2}, o maior número é ${maior};`);
    }
}

maiorNumero(1, 2);
