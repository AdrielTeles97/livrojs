const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

const numeros = []

frm.addEventListener('submit', e => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numeros.includes(numero)) {
        alert("Número já foi adicionado na lista")
        return
    }


    numeros.push(numero)
    frm.reset()
    frm.inNumero.focus()

    resp1.textContent = `Números: ${numeros.join(', ')}`
})

frm.inVerificar.addEventListener('click', () => {
    if (numeros.length === 0) {
        alert("precisa inserir números para verificar.")
        return
    }

    if (numeros.length < 2) {
        alert("Precisa inserir pelo menos 2 números para a verificação")
        return
    }
    
    const result = verifyOrdem(numeros)

    if (result) {
        resp2.textContent = `Atenção ... Números estão em ordem crescente`
    } else {
        resp2.textContent = `Atenção ... Números não estão em ordem crescente`
    }
})

function verifyOrdem(numeros) {
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            return false
        }
    }

    return true
}
