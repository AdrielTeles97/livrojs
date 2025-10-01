const frm = document.querySelector("form")
const h5Times = document.querySelector("#timesItalic")
const tableBody = document.querySelector("#corpoTabela")
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
    const listaTimes = document.querySelectorAll("h5")
    console.log(listaTimes);
    
    if (listaTimes.length % 2 == 1) {
        alert("A listagem de times precisa ser par para montarmos a tabela")
        return
    }


    tableBody.textContent = "" //limpa tabela anterior
    tableJogos.className = "d-block"


    for (let i = 0; i < listaTimes.length; i += 2) {
        const linha = tableBody.insertRow(-1)

        const cel1 = linha.insertCell(0)
        const cel2 = linha.insertCell(1)

        cel1.textContent = listaTimes[i].textContent // preenche a primeira célula com primeiro time
        cel2.textContent = listaTimes[i + 1].textContent //segundo time
    }
})

frm.btResetar.addEventListener("click", () => {
    window.location.reload()
    frm.inClube.focus()
})