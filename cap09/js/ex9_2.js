const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")
const inRadios = document.querySelectorAll("input") //captura tags input dentro da página



const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"] //vetor com a lista de clubes

    let selecao
    //percorre os inRadios para verificar qual está selecionado
    for(let i = 0; i < inRadios.length; i++) {
        if(inRadios[i].checked) {
            selecao = i //se selecionado, armazena a posição do indice selecionado
            break // sai da repetição
        }
    }

    if(selecao <= 2) { // torce para algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}` //modifica cores
        //muda propriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid" //mostra a imagem
        imClube.alt = `Símbolo do clube ${clubes[selecao]}` //texto alternativo
        localStorage.setItem("clube", clubes[selecao]) //salva o nome do clube
    } else { // Não tem clube
        dvTitulo.className = "row"
        imClube.className = "d-none" //oculta  a imagem
        imClube.alt = ""
        localStorage.removeItem("clube") //remove variável do localStorage
    }
}

//percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
    if(localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")
        //conforme o clube, marca um dos elementos do input do tipo radio
        if(clube == "Brasil") {
            inRadios[0].checked = true
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }

        trocarClube() //chama a função que troca a imagem
    }
}

//ao carregar a página verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)