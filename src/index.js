import validator from "./validator.js";
const mostrarMensaje = (e) => {
  e.preventDefault();
  const numeroDetarjeta = document.getElementById("grupo__password").value;
     const error = document.getElementById('error');
  if (numeroDetarjeta == "" || numeroDetarjeta == null) {
    console.log('<li>por favor diligencia todos los campos;</li>');
    error.style.display = "block";
    error.innerHTML += '<li>por favor diligencia todos los campos;</li>'
  }
  if (numeroDetarjeta.length == 16) {
    console.log('entre al primer if');
  }
  if (isNaN(numeroDetarjeta)) {
    console.log('entre al segundo if');
 
  }

  console.log(validator.isValid(numeroDetarjeta));
};
const formulario = document.getElementById('formulario');
formulario.addEventListener("submit", mostrarMensaje);
