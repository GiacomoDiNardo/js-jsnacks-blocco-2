let inputNumber = document.getElementById("num-input");
const submit = document.getElementById("btn-submit");
let numberPari = document.getElementById("number")

submit.addEventListener("click", function() {
    let number = parseInt(inputNumber.value)


    if (number % 2 === 0) {
        numberPari.innerHTML = number;

    } else {
        numberPari.innerHTML = number + 1;
    }
})