const frm = document.querySelector('form')
const inConvenio = document.querySelector('#inConvenio')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

function calcularDesconto(valor, taxaDesconto) {
    const valorDesconto = (valor * taxaDesconto) / 100
    return valorDesconto
}

frm.rbSim.addEventListener('click', () => {
    console.log('Clicado')

    if (frm.rbSim.checked) {
        inConvenio.className = 'exibe-linha'
    }
})

frm.rbNao.addEventListener('click', () => {
    console.log('Nao clicado')
    if (frm.rbNao.checked) {
        inConvenio.className = 'oculta'
    }
})

frm.addEventListener('submit', e => {
    e.preventDefault()

    const valorVacina = Number(frm.inValor.value)
    let valorDesconto = 0

    if (frm.rbSim.checked) {
        const num = frm.selecao.selectedIndex
        const textSelecao = frm.selecao.options[num].value
        if (textSelecao == 'amigo') {
            valorDesconto = calcularDesconto(valorVacina, 20)
        } else if (textSelecao == 'saude') {
            valorDesconto = calcularDesconto(valorVacina, 50)
        }
    }

    if (frm.rbNao.checked) {
        valorDesconto = calcularDesconto(valorVacina, 10)
    }

    const valorPagar = valorVacina - valorDesconto

    resp1.textContent = `Desconto: R$:${valorDesconto}`
    resp2.textContent = `A pagar R$: ${valorPagar.toFixed(2)}`
})

frm.rbSim.dispatchEvent(new Event('click'))
