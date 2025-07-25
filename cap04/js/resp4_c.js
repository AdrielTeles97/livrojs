const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorDeposito = Number(frm.inNumber.value);

    if (valorDeposito < 1.00) {
        resp1.textContent = `Valor insuficiente! Min: R$1,00`;
        resp1.style.color = "red";
        frm.inNumber.focus();
        return
    }

    let tempo;
    let troco;

    if (valorDeposito >= 3.00) {
        tempo = 120;
        troco = valorDeposito - 3.00;
    } else if (valorDeposito >= 1.75) {
        tempo = 60;
        troco = valorDeposito - 1.75;
    } else {
        tempo = 30;
        troco = valorDeposito - 1.00
    }

    resp1.textContent = `Tempo: ${tempo} min`;
    if (troco > 0) {
        resp2.textContent = `Troco R$: ${troco.toFixed(2)}`;
    }

});