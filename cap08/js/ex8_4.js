const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

frm.rbPizza.addEventListener("click", () => {
    frm.inPizza.className = "exibe"
    frm.inBebida.className = "oculta"
    
})

frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta"
    frm.inBebida.className = "exibe"
    
})

//quando o campo recebe o foco
frm.inDetalhes.addEventListener("focus", () => {
    if (frm.rbPizza.checked) {
        const pizza = frm.inPizza.value
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4

        frm.inDetalhes.placeholder = `Até ${num} sabores.`
    }    
})

//quando o campo perde o foco
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

//evento de submit
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let produtos
    if(frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex
        produtos = frm.inPizza.options[num].text
    } else {
        const num = frm.inBebida.selectedIndex
        produtos = frm.inBebida.options[num].text
    }

    const detalhes = frm.inDetalhes.value
    itens.push(produtos + "(" + detalhes + ")")

    resp.textContent = itens.join("\n")
    frm.reset()

    frm.rbPizza.dispatchEvent(new Event("click"))
})



