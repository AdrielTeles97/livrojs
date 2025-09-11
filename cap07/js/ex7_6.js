const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    let erros = []

    //verifica se o tamanho é valido
    if (senha.lenght < 8 || senha.lenght > 15) {
        erros.push("Possuir entre 8 e 15 caracteres")
    }

    // verificar se não possui números
    if (senha.match(/[0-9]/g) == null) {
        erros.push("Possuir números (mínimo 1)")
    }

    //verificar se não possui letras minúsculas
    if (!senha.match(/[a-z]/g)){
        erros.push("possuir letras minúsculas (mínimo, 1)")
    }

    //verificar se não possui letras maiúsculas aoenas 1 
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g) == 1){
        erros.push("Possuir letras maúsculas (mínimo, 2)")
    }

    //verificar se não possui símbolos ou "_"
    if(!senha.match(/[\W|_]/g)) {
        erros.push("Possuir símbolos (mínimo 1)")
    }

    // se vetor estiver vazio, significa que não foram encontrados erros
    if (erros.length == 0) {
        res.textContent = "Ok! senha válida"
    } else {
        res.textContent = `Erro... A senha deve ${erros.join(", ")}`
        res.style.color = "red"
    }
})