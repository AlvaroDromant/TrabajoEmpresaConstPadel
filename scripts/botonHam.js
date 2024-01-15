const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

function mostrarMas(id) {
    var infoAdicional = document.getElementById(id);
    infoAdicional.style.display = infoAdicional.style.display === 'none' ? 'block' : 'none';
  }
