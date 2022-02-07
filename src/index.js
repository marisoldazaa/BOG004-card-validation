import validator from './validator.js';

function obtenerdatos(){
let arrayobtenerdatos = new Array (); //Genere un array para poder dividir los elementos obtenidos
arrayobtenerdatos = document.getElementById("inputnumber").value; //Aquí estoy vinculando el html con el js
{alert("Iniciar la validación"); 
validator.isValid(arrayobtenerdatos) //Relacionar al validador con el js y validador 
console.log(arrayobtenerdatos) //Evidenciar los números al ser digitados 
}}


//{alert("Iniciar la validación"); 
//var tarjetanumero = document.getElementById("inputnumber").value;
//console.log(tarjetanumero)
//validator.isValid(tarjetanumero)
//}

const boton = document.getElementById("pagetwo__button");//
console.log(boton);
// Uso el querySelector para que al dar click Devuelve el primer elemento encontrado en el documento//
boton.addEventListener("click", obtenerdatos);
    