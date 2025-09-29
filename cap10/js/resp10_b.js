const frm = document.querySelector('form')
const resp = document.querySelector('#outResult')

frm.addEventListener('submit', e => {
    e.preventDefault()

    const nome = frm.inNome.value
    const partes = nome.split(' ')

    if (partes.length == 0 || partes.length == 1) {
        alert('Informe o nome completo')
        return
    }

    resp.textContent = ''

    const cores = [
        'red',
        'green',
        'purple',
        'black',
        'yellow',
        'pink',
        'lime',
        'teal',
        'cadetblue',
        'darkseagreen'
    ]

    for (let palavra of partes) {
        const h3 = document.createElement('h3')
        h3.textContent = palavra
        const numberRandon = Math.floor(Math.random() * 10)
        h3.style.color = cores[numberRandon]
        resp.appendChild(h3)
    }

    frm.reset()
    frm.inNome.focus()
})
