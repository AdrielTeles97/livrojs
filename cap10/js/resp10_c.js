const frm = document.querySelector("form")
const h5Times = document.querySelector("#timesItalic")
const table = document.querySelector("table")
const tableJogos = document.querySelector("#tabela-jogos")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeClube = frm.inClube.value
    //chama função encarregada de inserir o clube na tela.
    adicionarClube(nomeClube)
    frm.reset()
    frm.inClube.focus()
})

const adicionarClube = (nome) => {
    if (!nome) return // se não tiver nome para

    const h5 = document.createElement("h5")
    h5.textContent = nome

    h5Times.appendChild(h5)
}

frm.btMontarTabela.addEventListener("click", () => {
    console.log("Montar tabela preparada")
    
    
})