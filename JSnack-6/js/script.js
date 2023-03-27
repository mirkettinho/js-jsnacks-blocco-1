let risultato = document.querySelector(".risultato")
let risultatoB = document.getElementById("scaletta")
const domanda = parseInt(prompt("inserisci un numero"))

let cubo= domanda * domanda * domanda

message = `il cubo del numero inserito è ${cubo}`

risultato.innerHTML = message
console.log(domanda, cubo, message, risultato)

for(let i = 0; i <= domanda; i++){
  cubo2= i * i * i;
  message2 = `il cubo di ${i} è ${cubo2}`
  risultatoB.innerHTML = message2

  console.log(cubo2, message2)
}
