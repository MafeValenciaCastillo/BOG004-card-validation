import validator from "./validator.js";
const mostrarMensaje = (e) => {
  e.preventDefault();
  const numeroDetarjeta = document.getElementById("numeroTarjeta").value;
  const error = document.getElementById("error");
  const respuesta = document.getElementById("respuesta");
  respuesta.innerText = "";
  if (numeroDetarjeta == "" || numeroDetarjeta == null) {
    console.log("<li>por favor diligencia todos los campos</li>");
    error.style.display = "none";
    error.innerHTML += "<li>por favor diligencia todos los campos</li>";
  } else if (numeroDetarjeta.length < 16) {
    error.style.display = "none";
    error.innerHTML += "<li>Número tarjeta demasiado corto</li>";
  } else if (isNaN(numeroDetarjeta)) {
    error.style.display = "none";
    error.innerHTML += "<li>El número de tarjeta no es un número</li>";
  } else {
    const esValido = validator.isValid(numeroDetarjeta);

    if (esValido) {
      respuesta.innerText = "!El número de tarjeta es válido!";
    } else {
      respuesta.innerText = "!El número de tarjeta no es válido!";
    }
  }
};
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarMensaje);
