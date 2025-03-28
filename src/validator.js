const validator = {
  isValid: function (arrayobtenerdatos) {
    //Esta función lo que hace es relacionar el indexjs con el validadorjs
    console.log("estoy en Valid");

    //Aquí estoy intentando separar los números para que sean caracteres independientes
    var datosindividuales = Array.from(arrayobtenerdatos);
    console.log(datosindividuales);
    const reversed = datosindividuales.reverse();
    console.log("datosindividuales:", datosindividuales);

    for (let i = 0; i < reversed.length; i++) {
      if (i % 2 != 0) {
        reversed[i] = 2 * reversed[i];

        //console.log("this is" + reversed[i], "en la posición ", i);
      }
      if (reversed[i] > 9) {
        reversed[i] = reversed[i] - 9;
      }
    }
    console.log("finalizado", reversed);

    //var convirtiendoString =parseInt(reversed)
    //console.log(convirtiendoString)
    

    let sumaResultados = 0;
    for (let i = 0; i < reversed.length; i++) {
      sumaResultados += +reversed[i];
    }
    console.log(sumaResultados);

    if (sumaResultados % 10 === 0) {
      alert("¡Felicitaciones! ¡Qué inicie la diversión!");
      console.log("yes", sumaResultados);
    } else {
      alert("¡Lo sentimos! Tu tarjeta no es válida");
    }
  },

  // Enmascarar los numeros 

  maskify: function (arrayobtenerdatos) {
    if (arrayobtenerdatos.length < 6) return arrayobtenerdatos;
    const cuatroUltimosNumeros = arrayobtenerdatos.substr(-4);
    const primerosNumeros = arrayobtenerdatos.substr(0, 0);
    const enmascarar = arrayobtenerdatos
      .substr(0, arrayobtenerdatos.length - 4)
      .replace(/\d/g, "#");
    console.log(`${primerosNumeros}${enmascarar}${cuatroUltimosNumeros}`);
    return `${primerosNumeros}${enmascarar}${cuatroUltimosNumeros}`;
  },
};

export default validator;
