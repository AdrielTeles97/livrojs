const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value 

    const h5 = document.createElement("h5")
    const texto = document.createTextNode(tarefa) //cria um texto
    h5.appendChild(texto) //define que texto será filho de h5
    dvQuadro.appendChild(h5) //e que h5 será filho de divQuadro

    frm.inTarefa.value = "" //limpa o campo de edição
    frm.inTarefa.focus() //joga o cursor neste campo
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") //obtém as tags h5 da página

    if(tarefas.length == 0) {
        alert("Não há tarefas para selecionar") // se não há tarefas, exibe alerta
        return
    }

    let aux = -1 //variável auxiliar para indicar a linha selecionada

    //percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) {
        //se tag é da class tarefa-selecionada (está selecionada)
        if(tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal" // troca para normal
            aux = i //muda o valor da variável aux
            break // sai da operação
        }

    }

    //se a linha que está selecionada é a última, irá voltar para a primeira
    if(aux == tarefas.length - 1){
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha

})