import validator from './validator.js';

function obtenerdatos()
{alert("Le has dado click"); 

var tarjetanumero = document.getElementsByClassName("inputnumber").value;
console.log(tarjetanumero)
}

const boton = document.getElementById("pageone__button");//
console.log(boton);
// Uso el querySelector para que al dar click Devuelve el primer elemento encontrado en el documento//
boton.addEventListener("click", obtenerdatos);
    