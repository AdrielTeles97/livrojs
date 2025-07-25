const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = frm.inNumero.value;
    const raizQuadrada = Math.sqrt(numero);

    if(Number.isInteger(raizQuadrada)) {
        resp.textContent = `Raiz ${raizQuadrada}`;
    } else {
        resp.textContent = `Não há raiz exata para o número: ${numero}`;
    }
});