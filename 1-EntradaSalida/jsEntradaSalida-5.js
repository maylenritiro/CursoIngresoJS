/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    var informacion_personal;
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    informacion_personal = "Usted se llama " + nombre + " y tiene " + edad + " años.";
    alert(informacion_personal);
}

