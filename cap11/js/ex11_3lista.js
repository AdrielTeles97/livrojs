const tbPalavras = document.querySelector("table")
const ckMostrar = document.querySelector("input[type='checkbox']")

const montarTabela = () => {
    //se houver dados no localStorage
    if (localStorage.getItem("jogoPalavra")) {
        //obtém conteúdo e converte em elementos de vetor (na ocorrencia ";")
        const palavras = localStorage.getItem("jogoPalavra").split(";")
        const dicas = localStorage.getItem("jogoDica").split(";")

        //percorre elementos do vetor e os insere na tabela
        for (let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1) //adiciona uma linha

            const col1 = linha.insertCell(0)
            const col2 = linha.insertCell(1)
            const col3 = linha.insertCell(2)

            col1.innerText = palavras[i]
            col2.innerText = dicas[i]
            col3.innerHTML = "<i class='exclui' title='excluir'>&#10008</i>"
        } 
    } else {
        const linha = tbPalavras.insertRow(-1) //adiciona uma linha
        const col1 = linha.insertCell(0)
        col1.innerHTML = " <p>Nada cadastrado!</p> "
    }
}


//ocorre quando o checkbox é marcado
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? montarTabela() : window.location.reload()
})

tbPalavras.addEventListener("click", (e) => {
    if (e.target.classList.contains("exclui")) {
        // acessa o pai do pai do elemento alvo, e obtém o texto do 1º filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText

        if (confirm(`Confirma exclusão da palavra: ${palavra} ?`)) {
            //remove a linha da tabela, correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem("jogoPalavra")
            localStorage.removeItem("jogoDica")

            const palavras = []
            const dicas = []

            //obtém os dados da tabela, acrescentando-os aos vetores
            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavra.push(tbPalavras.rows[i].cells[0].innerText)
                dicas.push(tbPalavras.rows[i].cells[1].innerText)
            }

            //salva o conteúdo dos vetores em localStorage (sem a linha removida)
            localStorage.setItem("jogoPalavra", palavras.join(";"))
            localStorage.setItem("jogoDica", dicas.join(";"))
        }
    }
})