/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resultado por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var suma_numeros;
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt(numero1);
    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);
    suma_numeros = numero1+numero2;
    alert(suma_numeros);
}

