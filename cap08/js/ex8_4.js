const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

//evento de click radio pizza
frm.rbPizza.addEventListener("click", () => {
    frm.inPizza.className = "exibe"
    frm.inBebida.className = "oculta"
})

//evento de click radio bebiba
frm.rbBebida.addEventListener("click", () => {
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})

//evento que trás opções de sabores no campo input
frm.inDetalhes.addEventListener("focus", () => {
    if(rbPizza.checked){
        const pizza = frm.inPizza.value
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

//quando tira o foco do input
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let produtos
    if (frm.rbPizza.checked) {
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

