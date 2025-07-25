//Cria referência ao formulário
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//Adiciona um ouvindo no form
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita o envio padrão do formulário

    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

    resp.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
});

frm.addEventListener("reset", () => {
    resp.textContent = ""; //Limpando resposta.
});