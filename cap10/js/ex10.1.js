const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const tarefas = frm.inTarefa.value
    const h5 = document.createElement("h5")
    const text = document.createTextNode(tarefas)
    h5.appendChild(text)
    dvQuadro.appendChild(h5)

    frm.reset()
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")
    
    if (tarefas.length == 0) {
        alert("Não há tarefas cadastradas")
        return
    }

    let aux = -1

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal"
            aux = i
            break
        }
    }

    if(aux == tarefas.length -1) {
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada"
})


frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    tarefas.forEach((tarefa, i) => {
        if(tarefa.className == "tarefa-selecionada") {
            aux = i
        }
    })

    if (aux == -1) {
        alert("Selecione uma tarefa para remove-lá")
        return
    }

    if (confirm(`Deseja remover a ID:${aux + 1} - ${tarefas[aux].innerText} ?`)) {
        dvQuadro.removeChild(tarefas[aux])
    }
})


frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")
    console.log(tarefas);
    
    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas")
        return
    }

    let dados = "" //armazena os dados
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"
    })

    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    if (localStorage.getItem("tarefasDia")) {
        alert("Ok")
    }
})


window.addEventListener("load", () => {
    if (localStorage.getItem("tarefasDia")) {
        const dados = localStorage.getItem("tarefasDia").split(";")

        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const text = document.createTextNode(dado)
            h5.appendChild(text)
            dvQuadro.appendChild(h5)
        })
    }
})