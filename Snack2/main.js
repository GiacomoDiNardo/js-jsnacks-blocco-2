const firstname = ["Giacomo", "Filippo", "Michele", "Lorenzo", "Daniele", "Matteo"];
const surname = ["Bianchi", "Tesi", "Lencioni", "Granucci", "Ziboli"]
const casualName = document.getElementById("casual-name")
const btnSubmit = document.getElementById("btn-submit")



btnSubmit.addEventListener("click", function() {
    let randomName = firstname[Math.floor(Math.random() * firstname.length)];
    let randomSurname = surname[Math.floor(Math.random() * surname.length)];
    
    casualName.innerHTML = randomName + " " + randomSurname
})
