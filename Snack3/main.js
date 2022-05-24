
const numbersContainer = []
let somma = 0
const sommatoria = document.getElementById("sommatoria")


for (let i = 0; i < 10; i++) {
    let numbers = parseInt(prompt("inserisci numeri"))


    numbersContainer.push(numbers)
    if (i % 2 !== 0) {
        somma += numbersContainer[i] 
    }
}

console.log(numbersContainer);

console.log(somma);

sommatoria.innerHTML = somma