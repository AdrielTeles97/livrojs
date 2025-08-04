const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const chin = Number(frm.inChin.value);
    const ano = Number(frm.inAnos.value);

    let resposta = "";
    let valChin = chin;

    for (let i = 1; i <= ano; i++) {
        resposta = `${resposta} ${i}º Ano: ${valChin} Chinchilas\n`;
        valChin = valChin * 3;
        console.log(valChin);
    }

    resp.textContent = resposta;
});