import validator from "./validator.js";
let numeroDetarjetaGlobal = document.getElementById("numeroTarjeta").value;
const mostrarMensaje = (e) => {
  console.log(numeroDetarjetaGlobal)
  e.preventDefault();
  const error = document.getElementById("error");
  const respuesta = document.getElementById("respuesta");
  respuesta.innerText = "";
  if (numeroDetarjetaGlobal == "" || numeroDetarjetaGlobal == null) {
    console.log("<li>por favor diligencia todos los campos</li>");
    error.style.display = "block";
    error.innerHTML += "<li>por favor diligencia todos los campos</li>";
  } else if (numeroDetarjetaGlobal.length < 16) {
    error.innerHTML += "<li>Número tarjeta demasiado corto</li>";

  } else if (isNaN(numeroDetarjetaGlobal)) {
   error.innerHTML += "<li>El número de tarjeta no es un número</li>";

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

// Se agrega evento al input
const numeroTarjeta = document.getElementById("numeroTarjeta");

numeroTarjeta.addEventListener("change", transformarTarjeta);
