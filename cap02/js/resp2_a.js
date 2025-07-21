const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const medicamento = frm.inMedicamento.value;
    const preco = frm.inPreco.value;

    //processamento
    const desconto = Math.round(preco) * 2;

    //saida
    resp1.textContent = `Promoção de ${medicamento}`;
    resp2.textContent = `Leve 2 por apenas R$ ${desconto}`; 
});