const frm = document.querySelector("form")
const resp = document.querySelector("h3")

function validarNome(nome) {
    if(!nome || nome.length === 0) {
        return false
    } else {
        return true
    }
}

function obterSobreNome(nome) {
    const partes = nome.split(" ")
    const ultimoNome = partes[partes.length - 1]

    return ultimoNome.toString().toLowerCase()
}

function contarVogais(nome) {
    const vogais = "aeiouAEIOU"
    let contadorVogais = 0

    for (const letra of nome) {
        if(vogais.includes(letra)) {
            contadorVogais++
        }
    }

    return contadorVogais.toString().padStart(2, "0")
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    validarNome(nome)
    const pegaUltimoNome = obterSobreNome(nome)
    const numeroDeVogais = contarVogais(nome)

    resp.textContent = `Senha Inicial: ${pegaUltimoNome}${numeroDeVogais}`
})