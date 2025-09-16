const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataMulta = frm.inInfracao.value
    const valorDaMulta = frm.inValorMulta.value

    const dataLimite = new Date()

    const partes = dataMulta.split("-")

    dataLimite.setDate(Number(partes[2]))
    dataLimite.setMonth(Number(partes[1] - 1))
    dataLimite.setFullYear(Number(partes[0]))

    const dia = dataLimite.getDate()

    dataLimite.setDate(dia + 90)

    const prazoLimite = dataLimite.getDate()
    const mes = dataLimite.getMonth() + 1
    const ano = dataLimite.getFullYear()

    const descontoTotal = valorDaMulta * 0.80

    resp1.textContent = `Data limite para pagamento com desconto: ${prazoLimite < 10 ? "0" + prazoLimite : prazoLimite}/${mes < 10 ? "0" + mes : mes}/${ano}`
    resp2.textContent = `valor do desconto: R$:${descontoTotal.toFixed(2)}`

})