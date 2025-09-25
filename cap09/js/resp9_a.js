const frm = document.querySelector("form")
const resp =  document.querySelector("pre")
const msgAlert = document.querySelector("#msgAlert")
const btRemover = document.querySelector("#btRemove")

/* 
1 - Criar vetor de produtos
2 - trabalhar o evento submit
3 - no evento submit tratamento básico no dado do produto
4 - depois de validar os dados avançamos para incluir no vetor.
5 - depois de incluir no vetor atualizamos o localStorage

funções: adicionarProduto(), atualizaTela() e por último limpa lista()
*/

let produtosArray = [] //lista de produtos local


const ordenacao = (array) => {
    return array.sort((a, b) => a.localeCompare(b, "pt-BR", {
        sensitivity: "base"
    }))
}

const atualizaTela = () => {
    if(!localStorage.getItem("produtos")) {
        msgAlert.textContent = "Nenhum produto cadastrado"
        msgAlert.className = "d-block alert alert-warning"
        resp.textContent = ""
        return
    }
    
    //se tiver produtos eu não mostro o alert
    msgAlert.textContent = ""
    msgAlert.className = "d-none"
    
    produtosArray = JSON.parse(localStorage.getItem("produtos"))
    resp.textContent = `Produtos adicionados \n${"-".repeat(30)} \n` + ordenacao(produtosArray).join("\n")
}

const cadastrarProdutos = (produto) => {
    if (!produto.trim() || produto.trim().length == " ") {
        alert("Por favor informe um produto para continuar")
        return
    }  
    
    produtosArray.push(produto)
    produtosArray = ordenacao(produtosArray)
    localStorage.setItem("produtos", JSON.stringify(produtosArray))
    frm.reset()
    frm.inProduto.focus()
}

frm.addEventListener("submit", (e) => {
    e.preventDefault() // previne o envio padrão de formulário

    const produto = frm.inProduto.value
    cadastrarProdutos(produto)
    atualizaTela()
})


btRemover.addEventListener("click", () => {
    localStorage.removeItem("produtos")
    
    
    const modal = bootstrap.Modal.getInstance(document.getElementById("modalRemover"))
    modal.hide()
    produtosArray = []
    atualizaTela() 
})

//funções são executadas quando a página é carregada
window.addEventListener("load", () => {
    atualizaTela()
})
