import validator from "./validator.js";
let numeroDetarjetaGlobal;
const mostrarMensaje = (e) => {
  e.preventDefault();
  const error = document.getElementById("error");
  const respuesta = document.getElementById("respuesta");
  respuesta.innerText = "";
  if (numeroDetarjetaGlobal == "" || numeroDetarjetaGlobal == null) {
    error.style.display = "block";
  } else if (numeroDetarjetaGlobal.length < 16) {
    error.style.display = "block";
  } else if (isNaN(numeroDetarjetaGlobal)) {
    error.style.display = "block";
  } else {
    const esValido = validator.isValid(numeroDetarjetaGlobal);
    if (esValido) {
      respuesta.innerText = "!El número de tarjeta es válido!";
    } else {
      respuesta.innerText = "!El número de tarjeta no es válido!";
    }
  }
};
const transformarTarjeta = () => {
  const numeroTarjeta = document.getElementById("numeroTarjeta");
  numeroDetarjetaGlobal = numeroTarjeta.value;
  numeroTarjeta.value = validator.maskify(numeroTarjeta.value);
};

// Se agrega evento al formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarMensaje);

