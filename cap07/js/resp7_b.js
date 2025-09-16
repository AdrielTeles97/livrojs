const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value.trim()

    const fraseSemEspacos = frase.replace(/ /g, "")
    const frasesMinusculas = fraseSemEspacos.toLowerCase()
    const vetorFrases = frasesMinusculas.split("")
    const tam = vetorFrases.length
   
    let ehPalindromo = true

    for (let i = 0; i < Math.floor(tam / 2); i++) {
        if (vetorFrases[i] !== vetorFrases[tam - 1 - i]) {
            ehPalindromo = false
            break
        }
    }

    const resultado = ehPalindromo ? 'Sim! é palindromo' : 'Não! Não é palíndromo'
    resp.textContent = resultado
    
})