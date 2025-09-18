const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto) { // recebe por parâmetro o texto a ser exibido
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

function incluir(){
    titulo("=== < Inclusão de Vinhos === >")
    
    const marca = prompt("Marca: ")
    const tipo = prompt("tipo: ")
    const preco = Number(prompt("Preço: "))

    vinhos.push({ marca, tipo, preco })

    console.log("Ok! Vinho cadastrado")
}

function listar(){
    titulo("===< Lista de vinhos Cadastrados >===")
    console.log("Marca............... Tipo.............. Preço R$:");
    //Percorre o array de vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + 
                    `${vinho.preco.toFixed(2).padStart(2)}`)
    }
}

function pesquisar() {
    titulo("=== < Pesquisa por Tipo de vinho > ===")

    const pesq = prompt("Tipo: ") //lê o tipo do vinho a pesquisar

    let contador = 0 //contador para verificar se existe
    console.log("Marca .............. Tipo .............. Preço R$:")

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + `${vinho.preco.toFixed(2).padStart(9)}`)
            contador++
        }
    }

    if (contador == 0) {
        console.log(`Obs: Não há vinhos cadastrados do tipo ${pesq}`)   
    }
    
}

function calcularMedia(){
    titulo("=== < Média e Destaques do Cadastro de vinhos > ===")

    const num = vinhos.length //obtem o numero de elementos no vetor
    if (num == 0) {
        console.log(`Obs: Não há vinhos cadastrados`)
        return
    }
    let total = 0
    for (const vinho of vinhos){
        total += vinho.preco
    }

    const media = total / num // cálcula  a média

    const vinhos2 = [...vinhos] //cria uma cópia do vetor original
    vinhos2.sort((a, b) => a.preco - b.preco) //ordena por preço

    const menor = vinhos2[0]
    const maior = vinhos2[num - 1]

    console.log(`Preço médio dos vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)

}
// Programa principal
do {
    titulo("===< Cadastro de Vinho === >")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de vinhos")
    console.log("3. Pesquisar por tipo")
    console.log("4. Média e destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))
    
    if (opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        listar()
    } else if (opcao == 3) {
        pesquisar()
    } else if (opcao == 4){
        calcularMedia()
    } else {
        break
    }

} while (true)