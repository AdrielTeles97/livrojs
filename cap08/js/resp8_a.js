const frm = document.querySelector("form")
const resp = document.querySelector("pre")


function retornarTracos(nome) {
    let resultado = ""
    for (let i = 0; i < nome.length; i++){
        if(nome[i] === " ") {
            resultado += " "
        } else {
            resultado += "-"
        }
    }

    return resultado
}

function categorizarAluno(numero){
    if (numero > 0 && numero <= 12){
        return "Infantil"
    } else if(numero >= 13 && numero <= 18) {
        return "Juvenil"
    } else {
        return "Adulto"
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inAtleta.value
    const idade = Number(frm.inIdade.value)

    resp.textContent = ` ${nome} \n ${retornarTracos(nome)} \n Categoria: ${categorizarAluno(idade)}`
x   
})