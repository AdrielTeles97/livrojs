const frm =  document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = frm.inFruta.value;
    const numero = Number(frm.inNumero.value);

    let resultado = "";
    
    for(let i = 1; i <= numero; i++) {
        resultado += fruta + (i < numero ? " * " : "");
    }

    resp.textContent = resultado;
});