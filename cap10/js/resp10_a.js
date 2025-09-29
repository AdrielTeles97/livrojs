const frm = document.querySelector("form")
const outResp = document.querySelector("#outResult")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const idade = frm.inIdade.value
    const partes = idade.split("").map(Number)
    
    outResp.innerHTML = "" //remove imagens anteriores

    for (let image of partes) {
        const img = document.createElement("img")
        img.src = `./img/${image}.jpg`
        outResp.appendChild(img)
    }

    frm.reset()
    frm.inIdade.focus()

})