const prompt =  require("prompt-sync")();

const salario = Number(prompt("Seu salário:  "));
const tempo = Number(prompt("Tempo de serviço: "));
const quadrienios = Math.floor(tempo / 4);
const acrescimo = salario * quadrienios / 100;
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`);


