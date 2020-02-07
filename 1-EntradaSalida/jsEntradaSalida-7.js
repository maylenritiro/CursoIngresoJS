/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numeroUno;
var numeroDos;
var resutado;

function sumar()
{	
    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno + numeroDos;
    alert(resutado);
}

function restar()
{
    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno - numeroDos;
    alert(resutado);
}

function multiplicar()
{ 
    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno * numeroDos;
    alert(resutado);
}

function dividir()
{
    numeroUno = document.getElementById("numeroUno").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDos = parseInt(numeroDos);
    resultado = numeroUno / numeroDos;
    alert(resutado);
}

