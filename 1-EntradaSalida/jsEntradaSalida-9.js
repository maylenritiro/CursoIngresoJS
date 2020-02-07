/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var importe_aumentado;
    importe = document.getElementById("sueldo").value;
    importe_aumentado = importe * 1.1;
    document.getElementById("Resultado").value = importe_aumentado;
	
}
