const prompt = require('prompt-sync')()
const saques = []

do {
    const valor = Number(prompt('Saque R$: ')) //Lê valor do saque
    if (valor == 0) {
        break //para execução
    }

    saques.push(valor)
    if (valor % 10 == 0) {
        console.log('Saque realizado com sucesso')
    } else {
        console.log('Erro ... Saque inválido(Deve ser múltiplo de 10)')
    }
} while (true)
console.log("\nSaques válidos: ")
console.log("-".repeat(40))

const saquesValidos = saques.filter(saque => saque % 10 == 0)
for (const saque of saquesValidos) {
    console.log(saque.toFixed(2))
}
console.log("-".repeat(40))

const totalSacado = saquesValidos.reduce((total, saque ) => total + saque, 0)
console.log("Total de saques: R$ " + totalSacado.toFixed(2))

const saquesInvalidos = saques.length - saquesValidos.length
console.log("\nNº de tentativas de Saques (saques inválidos): " + saquesInvalidos)



