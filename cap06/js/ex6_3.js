const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const carros = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco })
    frm.inModelo.value = ''
    frm.inPreco.value = ''
    frm.inModelo.focus()

    //Dispara um evento de click em btListar
    frm.btListar.dispatchEvent(new Event('click'))  
});

frm.btListar.addEventListener('click', () => {
    if(carros.length === 0) {
        alert("Nenhum carro cadastrado!")
        return
    }

    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + ' - R$ ' + carro.preco.toFixed(2) + '\n', "")
        resp.textContent = `Lista de carros cadastrados:\n${'-'.repeat(40)}\n${lista}`
});

frm.btFiltrar.addEventListener('click', () => {
    const precoMax = Number(prompt('Qual valor máximo que o cliente deseja pagar ?'))
    if(precoMax == 0 || isNaN(precoMax)) return

    const filter = carros.filter(carro => carro.preco <= precoMax)
    if(filter.length === 0) {
        alert("Nenhum carro encontrado") 
        return
    }

    let lista = ''
    for (const carro of filter) {
        lista += carro.modelo + ' - R$ ' + carro.preco.toFixed(2) + '\n'
    }

    resp.textContent = `Carros até R$: ${precoMax.toFixed(2)}\n${'-'.repeat(40)}\n${lista}`
});

frm.btSimular.addEventListener('click', () => {
    const desconto = Number(prompt('Qual o percentual de desconto para a simulação ?'))
    if (desconto == 0 || isNaN(desconto)) {
        return
    }

    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))

    let lista = ''
    if (lista.length === 0) {
        alert('Nenhum carro cadastrado')
        return
    }
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`
    }

    resp.textContent = `Carros com desconto: ${desconto}%\n${'-'.repeat(40)}\n${lista}`
    
});