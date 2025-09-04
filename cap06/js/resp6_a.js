const form = document.querySelector("form")
const resp = document.querySelector("pre")
const tabela = document.querySelector("#tabela")

const clubes = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    clubes.push(nome)

    form.reset()
    form.inNome.focus()

    form.inListar.dispatchEvent(new Event("click"))

})

form.inListar.addEventListener("click", () => {
    if (clubes % 2 == 1) {
        resp.textContent = 'Para listar os clubes. Precisamos ter todos os pares'
    }   
    
    if (clubes.length > 0) {
        resp.textContent = `Times cadastrados: ${clubes.join(", ")}`
    } else {
        resp.textContent = `Nenhum clube cadastrado para o campeonato`
    }
})


form.inJogos.addEventListener("click", () => {
    const clubeClone = [...clubes]
    const tam = clubeClone.length

    if (tam == 0 || tam % 2 == 1) {
        alert("Deve ter um número par de clubes")
        return
    }

    let listaJogos = ""

    const ultimoDoArray = tam - 1
    for (let i = 0; i < tam / 2; i++) {
        listaJogos += clubeClone[i] + " x " + clubeClone[ultimoDoArray - i] + "\n"
    }


    tabela.textContent = listaJogos

})