const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorHora = frm.inMinuto.value;
    const tempoDeUso = frm.inUso.value;

    const blocosDe15min = Math.ceil(tempoDeUso / 15);
    console.log(blocosDe15min);
    const valorApagar = valorHora * blocosDe15min;
    console.log(valorApagar)

    resp.textContent = `Valor a pagar R$: ${valorApagar.toFixed(2)}`;
});