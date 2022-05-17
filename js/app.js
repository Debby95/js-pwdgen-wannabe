const nomeUtente = prompt("Come ti chiami?")
const cognomeUtente = prompt("Qual è il tuo cognome?")
const colorePreferito = prompt("Qual è il tuo colore preferito?")

const spanNomeUtente = document.getElementById("nomeUtente")

console.dir(spanNomeUtente);

spanNomeUtente.innerHTML = `<span class=text-white>
                            ${nomeUtente} ${cognomeUtente} ${colorePreferito} 22
                            </span>`