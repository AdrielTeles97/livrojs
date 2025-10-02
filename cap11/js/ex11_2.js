const frm = document.querySelector("form") //captura elementos da página
const dvPalco = document.querySelector("#divPalco")

const POLTRONAS = 240 //constante com o número de poltronas do teatro
const reservadas = [] //vetor com as poltronas reservadas pelo cliente

window.addEventListener("load", () => {
    //operador ternário: se houver dados salvos em localStorage, faz split(";") e
    // atribui esses dados ao array, caso contrário, o array é inicializado
    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : []

    //repetição para montar o nº total de poltronas (definida na constante)
    for (let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement("figure") //cria a tag figure
        const imgStatus = document.createElement("img") //cria a tag img

        //se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
        imgStatus.src = ocupadas.includes(i.toString()) ? "./img/ocupadas.jpg" : "./img/disponivel.jpg"
        imgStatus.className = "poltrona" //clase com dimensão da imagem
        const figCap = document.createElement("figcaption") //cria figcaption

        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : ""

        const num = document.createTextNode(`[${zeros}${i}]`) //cria texto

        figCap.appendChild(num) //define os pais de cada tag criada
        figure.appendChild(imgStatus)
        figure.appendChild(figCap)

        // se modulo de 24 == 12 (é o corredor: define a margem direita 60px)
        if (i % 24 == 12) figure.style.marginRight = "60px"
        
        dvPalco.appendChild(figure) //indica que figure é filha de dvPalco

        //se i módulo de 24 == 0: insere a quebra de linha
        if (i % 24 == 0) {
            dvPalco.appendChild(document.createElement("br"))
        }
    }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const poltrona = Number(frm.inPoltrona.value) //obtém o conteúdo de inPoltrona

    //valida o preenchimento do campo de entrada... não pode ser maior que a const
    if (poltrona > POLTRONAS) {
        alert("Informe um número de poltrona válida")
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : []

    //se a poltrona escolhida já está oculpada
    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada...`)
        frm.inPoltrona.value = ""
        frm.inPoltrona.focus()
        return
    }

    //captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1]
    imgPoltrona.src = "./img/reservada.jpg"

    reservadas.push(poltrona) //adiciona poltronas ao vetor reservadas

    frm.inPoltrona.value = "" //limpa o campo
    frm.inPoltrona.focus() // joga o foco em inPoltrona
})

frm.btConfirmar.addEventListener("click", () => {
    if (reservadas.length == 0) {
        alert("Não há poltronas reservadas")
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : []

    //se for decrescente, pois as reservas vão sendo removidas a cada alteraçao da imagem
    for (let i = reservadas.length - 1; i >= 0; i--) {
        ocupadas.push(reservadas[i])

        //captura imagem da poltrona, filha de dvPalco. é -1 pois começa em 0
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1]
        imgPoltrona.src = "./img/ocupada.jpg" //modifica atributo da imagem
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"))
})