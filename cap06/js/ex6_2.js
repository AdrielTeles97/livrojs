const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDicas = document.querySelector('#outDica')

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener('submit', e => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    if (num === sorteado) {
        respDicas.textContent = `Parabéns! Número sorteado: ${sorteado}`
        frm.inNumero.disabled = true
        frm.btNovo.className = 'exibe'
    } else {
        if (erros.includes(num)) {
            alert(`Você já tentou o número ${num}. Tente outro!`)
        } else {
            erros.push(num)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.textContent = `Números de erros: ${numErros} - Erros: ${erros.join(
                ', '
            )}`
            respChances.textContent = numChances
            if (numChances === 0) {
                alert('Suas chances acabaram!')
                frm.btSubmit.disabled = true
                frm.btNovo.className = 'exibe'
                respDicas.textContent = `Gamer over!! Número sorteado: ${sorteado}`
            } else {
                const dica = num < sorteado ? 'maior' : 'menor'
                respDicas.textContent = `Tente um número ${dica} que ${num}.`
            }
        }
    }

    frm.inNumero.value = ''
    frm.inNumero.focus()
})

frm.btNovo.addEventListener('click', () => {
    location.reload()
})
