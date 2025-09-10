const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const funcionario = frm.inNome.value
    const partes = funcionario.split(" ")
    let email = ""
    const tam = partes.length

    for (let i = 0; i < tam - 1; i++){
        email += partes[i].charAt(0)
    }

    email += partes[tam - 1] + "@empresa.com.br"
    res.textContent = `Email: ${email.toLocaleLowerCase()}`
})