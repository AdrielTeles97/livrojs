const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    // cria as condições para exibir a resposta
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        resp1.textContent = "Lados não podem formar um triângulo";
    } else {
        resp1.textContent = "Lados podem formar um triângulo";
        if (ladoA == ladoB && ladoA == ladoC) {
            resp2.textContent = "Tipo: Equilátero";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            resp2.textContent = "Tipo: Isósceles";
        } else {
            resp2.textContent = "Tipo: Escaleno";
        }
    }
});
