const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //obtém conteúdo dos campos (.trim() remove os espaços na palavra inicio e fim)
    const palavra =  frm.inPalavra.value.trim()
    const dica = frm.inDica.value

    //valida preenchimento (palavra não deve possuir espaços em branco ao meio)
    if (palavra.includes(" ")) {
        alert("Informe uma palavra válida(sem espaços)")
        return
    }

    // se já existe dados em localStorage, grava conteúdo anterior+";"palavra / dica
    if(localStorage.getItem("jogoPalavra")) {
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra)
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica)
    } else {
        localStorage.setItem("jogoPalavra", palavra)
        localStorage.setItem("jogoDica", dica)
    }

    //verifica se salvou
    if(localStorage.getItem("jogoPalavra")) {
        alert(`Ok! Palavra ${palavra} Cadastrada com sucesso!`)
    }

    frm.reset() //limpa o form
    frm.inPalavra.focus() //joga o foco em inPalavra
})