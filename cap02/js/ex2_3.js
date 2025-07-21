const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const veiculo = frm.inVeiculo.value;
    const preco = frm.inPreco.value;

    const entrada = preco * 0.50; //Entrada de 50%
    const parcela = (preco * 0.50) / 12; //Parcelas restantes

    resp1.textContent = `Promoção: ${veiculo}`;
    resp2.textContent = `Entrada de ${entrada.toFixed(2)}`;
    resp3.textContent = `+12x de R$ ${parcela.toFixed(2)}`;
});