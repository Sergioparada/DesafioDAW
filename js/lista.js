var idsarray = [1, 2 ,3 ,4 , 5];
var id = 10020;

function llenarTabla(){
	for (var i = 0; i < idsarray.length; i++) {
		
		var nombre = "a";
		var talla = "b";
		var img = "c";
		var fecha = "fecha";
		var precio = "precio";
		var unit= "unidad";
		var descrip= "bla bla bla";
		var dirigido= "unisex";
		var categoria = "categoria";
		var cantidad = "cantidad";

		var tablaPadre = document.getElementsByTagName('table')[0];

		var nuevaFila = tablaPadre.insertRow(i+1);

		var celda1 = nuevaFila.insertCell(0);
		var celda2 = nuevaFila.insertCell(1);
		var celda3 = nuevaFila.insertCell(2);
		var celda4 = nuevaFila.insertCell(3);
		var celda5 = nuevaFila.insertCell(4);
		var celda6 = nuevaFila.insertCell(5);
		var celda7 = nuevaFila.insertCell(6);
		var celda8 = nuevaFila.insertCell(7);
		var celda9 = nuevaFila.insertCell(8);
		var celda10 = nuevaFila.insertCell(9);
		var celda11 = nuevaFila.insertCell(10);

		celda1.innerHTML = id;
		celda2.innerHTML = nombre;
		celda3.innerHTML = talla;
		celda4.innerHTML = img;
		celda5.innerHTML = fecha;
		celda6.innerHTML = precio;
		celda7.innerHTML = unit;
		celda8.innerHTML = descrip;
		celda9.innerHTML = dirigido;
		celda10.innerHTML = categoria;
		celda11.innerHTML = cantidad;
		id=id+1;
	}
	
	

}

window.onload = function(){
	llenarTabla();
}