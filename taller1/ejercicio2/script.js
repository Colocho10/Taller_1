function calcular(){
	//creacion de variabloes en donde se van a almacenar los datos capturados en las cajas de texto
var libros = 0;
var cuadernos = 0;
var plumas = 0;
var total = 0;

//Asignacion del valor capturado en la caja del texto enla variable
libros = document.getElementById('libros').value;
cuadernos = document.getElementById('cuadernos').value;
plumas = document.getElementById('plumas').value;

//cálculo del descuento 
libros = libros * 100;
cuadernos =cuadernos * 15.50;
plumas = plumas * 2.35;
total = libros + cuadernos + plumas;

//Asignación del valor de la variable total a la caja de texto total
document.getElementById('total').value="$"+total;
console.log(total);
}
