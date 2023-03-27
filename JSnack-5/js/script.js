let array = []

let domanda;


for (let i = 0; i < 6 ; i++){
  domanda = parseInt(prompt("inserisci un numero"))
  console.log(domanda)
  if(i % 2){
    console.log("numero paro")
  }else{
    array.push(i + 1)
    console.log("numero disparo")
    console.log(array)
  }
}