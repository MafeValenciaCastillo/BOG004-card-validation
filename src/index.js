import validator from "./validator.js";
const mostrarMensaje = (e) => {
  e.preventDefault();
  const numeroDetarjeta = document.getElementById("numeroTarjeta").value;
  const error = document.getElementById("error");
  if (numeroDetarjeta == "" || numeroDetarjeta == null) {
    console.log("<li>por favor diligencia todos los campos;</li>");
    error.style.display = "block";
    error.innerHTML += "<li>por favor diligencia todos los campos;</li>";
  }
  if (numeroDetarjeta.length < 16) {
    error.style.display = "block";
    error.innerHTML += "<li>Número tarjeta pequeño;</li>";
  }
  if (isNaN(numeroDetarjeta)) {
    error.style.display = "block";
    error.innerHTML += "<li>El número de tarjeta no es un número;</li>";
  }
  const esValido = validator.isValid(numeroDetarjeta);
  console.log(esValido);
};
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarMensaje);
