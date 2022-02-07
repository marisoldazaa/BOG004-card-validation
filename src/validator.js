const validator = {
  isValid: function (arrayobtenerdatos){
  //Esta función lo que hace es relacionar el indexjs con el validadorjs 
console.log ("estoy en Valid")

//Aquí estoy intentando separar los números para que sean caracteres independientes 
var datosindividuales = Array.from(arrayobtenerdatos);
console.log(datosindividuales)
const reversed = datosindividuales.reverse();
console.log('datosindividuales:', datosindividuales);

// Intentar enmascarar los números

function maskify(arrayobtenerdatos){
  //if (arrayobtenerdatos.length < 12) return arrayobtenerdatos;
	const cuatroUltimosNumeros = arrayobtenerdatos.substr(-4);
	const primerosNumeros = arrayobtenerdatos
	.substr(1, arrayobtenerdatos.length - 5)
  .replace(/\d/g, '#');
	return `${primerosNumeros}${cuatroUltimosNumeros}`;
  console.log(maskify)
}

// Intentar sumar los elementos de un array 


// este intento lo unico que hizo fue contar la cantidad de los elementos del array 
//const sumar = [datosindividuales];
//let sum = 0; 
//for (let i=0; i <sumar.length; i++) {
//sum += sumar[i];
//}
//console.log(sumar);
//SI FUNCIONO 


// vamos con el intento 2 de sumar // 

//const sumando = [datosindividuales]
//const reducer = (accumulator, curr) => accumulator + curr;
//console.log(sumando.reduce(reducer));


// vamos como el intento 3 

//var arreglo = [arrayobtenerdatos];
//var sumando =0;
//for ( var i = 0; i < 4; i++){
//arreglo [i]= (arrayobtenerdatos);
  //arreglo [i] = Number (prompt ("ingresa"));
 //sumando =  sumando + arreglo[i];
//
//console.log(sumando)
//}


// VAMOS POR EL 4 INTENTO 
var total = [datosindividuales].reduce(function(a, b){ return a + b; });
console.log(total)


}};

export default validator;