const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do formulário

    const titulo = frm.inTitulo.value //obtém o conteúdo dos campos
    const genero = frm.inGenero.value

    inserirLinha(titulo, genero) //chama função que insere titulo e genero na tabela
    gravarFilmes(titulo, genero) // função que grava dados no localStorage

    frm.reset()
    frm.inTitulo.focus()
})

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) //adiciona uma nova linha na tabela

    const col1 = linha.insertCell(0) //cria colunas nas linhas inseridas
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo //joga um conteúdo em cada célula
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008 </i>"
}

const gravarFilmes = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulo")) {
        // ...obtém os dados e acrescenta ";" e o titulo/genero informado
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero

        localStorage.setItem("filmesTitulo", filmesTitulo)
        localStorage.setItem("filmesGenero", filmesGenero)
    } else {
        // se é a primeira inclusão, salva sem o delimitador
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulo")) {
        //obtém o conteúdo e converte em elementos do vetor (na ocorrência ";")
        const titulos = localStorage.getItem("filmesTitulo").split(";")
        const generos = localStorage.getItem("filmesGenero").split(";")

        //percorre os elementos do vetor e insere na tabela
        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i])
        }
    }
})

tbFilmes.addEventListener("click", (e) => {
    //se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains("exclui")) {
        //acessa o pai do pai do element alvo e obtém o texto do 1º filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if(confirm(`Confirma a exclusão do filme ? ${titulo}?`)) {
            //remove a linha da tabela correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem("filmesTitulo") //exclui filmes salvos em ...
            localStorage.removeItem("filmesGenero") //localstorage

            //salva novamente (se existir) acessando o conteúdo da tabela
            for (let i = 1; i < tbFilmes.rows.length; i++) {
                //obtém o conteúdo da tabela (coluna 0; título: coluna 1: genero)
                const auxTitulo = tbFilmes.rows[i].cells(0).innerText
                const auxGenero = tbFilmes.rows[i].cells(1).innerText
                gravarFilmes(auxTitulo, auxGenero) //chama gravarFilmes com dados da tabela
            }
        }
    }
})