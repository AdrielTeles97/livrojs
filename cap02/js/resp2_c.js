const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeProduto = frm.inProduto.value;
    const preco = frm.inPreco.value;

    const desconto = preco - preco * 0.5;
    const somaProduto = (preco * 3) - desconto;

    resp1.textContent = `${nomeProduto} - Promoção: Leve 3 por R$:${somaProduto.toFixed(2)}`;
    resp2.textContent = `O 3º produto custa apenas R$:${desconto.toFixed(2)}`; 
});