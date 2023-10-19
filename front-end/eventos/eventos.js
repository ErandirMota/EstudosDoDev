//const btn = document.getElementById("teste");
//btn.addEventListener("click", performAction)

function performAction(event) {
    console.log("Olá")
    console.log(event)
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)
    alert("Recebi o evento")
})

const btnEmail = document.getElementById("testeEmail")

btnEmail.addEventListener("focus", (event) => {
    console.log("Focou no elemento")
  })

btnEmail.addEventListener("blur", (event) => {
  console.log("Tirou o foco do elemento")
})

document.addEventListener("scroll", (event) => {
    console.log("escrollou né!")
    console.log(event)
})