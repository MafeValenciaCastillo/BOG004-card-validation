const validator = {
  isValid: (numeroDetarjetaEnletras) => {
    // esta funcion nos debe arojar un booleano despues de ejecutarse el algoritmo
    if (isNaN(numeroDetarjetaEnletras)) {
      return false;
    }

    // una ves se recibe el numero y se convierte en un arregle de string
    const arregloDenumeros = numeroDetarjetaEnletras.split("");
    let convertirAnumero = arregloDenumeros.map((numero) => parseInt(numero));
    console.log(convertirAnumero);
    const arregloMultiplicadoPorDos = convertirAnumero.map((numero, indice) => {
      if (indice % 2 == 0) {
        numero = numero * 2;
        return numero;
      } else {
        return numero;
      }
    });
    console.log(arregloMultiplicadoPorDos);
    const arregloMayorADiez = arregloMultiplicadoPorDos.map((numero, indice) => {
      if (indice % 2 == 0) {
        if (numero >= 10) {
          const digitos = numero.toString().split(""); // 14 => ["1", "4"];
          const digitosEnNumeros = digitos.map((numero) => parseInt(numero)); // [1, 4];
          let sumadigitos = digitosEnNumeros.reduce((a, b) => a + b);
          numero = sumadigitos;
        }
        return numero;
      } else {
        return numero;
      }
    });
    console.log(arregloMayorADiez);
    let sumatotal = arregloMayorADiez.reduce((a, b) => a + b);
    console.log(sumatotal);
    return sumatotal % 10 == 0;
  },
};
export default validator;
