let prompt = require("prompt-sync")()

let peso = parseFloat(prompt("informe o peso: "))
let altura = parseFloat(prompt("informe a altura em metro: "))

let imc = (peso / (altura*altura))

if(imc<18.5){
    console.log("Abaixo do peso")
} else if(imc > 18.5 && imc < 24.9){
    console.log("Peso normal")
}






// switch(imc){
//     case imc<18.5:
//     console.log("Abaixo do peso")
//     break;
// }