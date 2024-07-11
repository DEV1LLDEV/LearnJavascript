/*Faça um programa p/ calcular o valor de uma viagem
voce terá 3 variaveis:
1-preço do combustivel
2-gasto medio de combustivel por km
3-distancia em km da viagem
imprima no console o valor que será gasto de combustivel para realizar esta viagem*/

const combustivel=3.20;
const kmPorLitro= 10;
const distancia = 100;

let gastoDistancia=(distancia)/(kmPorLitro);
let gastoTotal=(gastoDistancia)*(combustivel);
console.log(gastoTotal);