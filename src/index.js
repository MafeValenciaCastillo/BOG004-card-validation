import validator from "./validator.js";
const mostrarMensaje = (e) => {
  e.preventDefault();
  const numeroDetarjeta = document.getElementById("grupo__password").value;

  if (numeroDetarjeta == "" || numeroDetarjeta == null) {
    console.log("por favor diligencia todos los campos");
    error.style.display = "block";
    error.innerHTML += "por favor diligencia todos los campos";
  }
  if (numeroDetarjeta.length == 16) {
    todo_correcto = false;
  }
  if (isNaN(numeroDetarjeta)) {
    
    todo_correcto = false;
  }

  console.log(validator.isValid(numeroDetarjeta));
};
formulario.addEventListener("submit", mostrarMensaje);
