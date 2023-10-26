const name = document.getElementById("textName");
const address = document.getElementById("textAddress");
const hour = document.getElementById("textHour");

name.addEventListener("focus", (event) =>  {
  event.target.style.border = purple;
})
address.addEventListener("blur", (event) =>  {
  console.log("Desfocou do elemento")
})

hour.addEventListener("blur", (event) => {
  console.log("Desfocou do elemento")
})