const validator = {
  isValid: (numeroDetarjetaEnletras) => {
    if (isNaN(numeroDetarjetaEnletras)) {
      return false;
    }
    const arregloDenumeros = numeroDetarjetaEnletras.split("");
    let convertirAnumero = arregloDenumeros.map((numero) => parseInt(numero));
    convertirAnumero.map((numero, indice) => {
      if (indice % 2 == 0) {
        numero = numero * 2;
      }
      return numero;
    });

    let sumatotal = convertirAnumero.reduce((a, b) => a + b, 0);

    return sumatotal % 10 == 0;
  },
};

export default validator;
