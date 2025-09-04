const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

// Pegar dados do candidato
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)

    candidatos.push({ nome, acertos })

    frm.reset()
    frm.inCandidato.focus()

    frm.inListarTodos.dispatchEvent(new Event("click"))
})

//Listar candidados
frm.inListarTodos.addEventListener("click", () => {
    let lista = ""
    for (const candidato of candidatos) {
        lista += `${candidato.nome} - ${candidato.acertos} acertos\n`
    }

    resp.textContent = lista

})

//aprovados para 2º fase
frm.segundaFase.addEventListener("click", () => {
    let lista = ""
    const minAcertos = Number(prompt("Número de acertos para aprovação ?"))

    const aprovados = candidatos
        .filter(c => c.acertos >= minAcertos)
        .sort((a,b) => b.acertos - a.acertos)
    for (const candidato of aprovados) {
        lista += `${candidato.nome} - ${candidato.acertos} acertos \n`
    }

    if (aprovados.length === 0) {
        resp.textContent = "Nenhum candidato avança para a próxima fase"
        return
    }

    resp.textContent = lista

    console.log(aprovados)
})