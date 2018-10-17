
var id = 10020;
id1=parseInt(localStorage.getItem('ids'));
var nombre = JSON.parse(localStorage['producto']);
var img = JSON.parse(localStorage['fotosReal']);
var fecha = JSON.parse(localStorage['fechas']);
var precio = JSON.parse(localStorage['precios']);
var unit= JSON.parse(localStorage['unidad']);
var descrip= JSON.parse(localStorage['desc']);
var dirigido= JSON.parse(localStorage['tipos']);
var categoria = JSON.parse(localStorage['cat']);
var cantidad = JSON.parse(localStorage['cantidad']);
var deportes = JSON.parse(localStorage['deportes']);

console.log(id1);

function llenarTabla(){
	for (var i = 0; i <= id1; i++) {
		
		nombre = JSON.parse(localStorage['producto']);
		 img = JSON.parse(localStorage['fotosReal']);
		 fecha = JSON.parse(localStorage['fechas']);
		 precio = JSON.parse(localStorage['precios']);
		 unit= JSON.parse(localStorage['unidad']);
		descrip= JSON.parse(localStorage['desc']);
		 dirigido= JSON.parse(localStorage['tipos']);
		 categoria = JSON.parse(localStorage['cat']);
		 cantidad = JSON.parse(localStorage['cantidad']);
		 deportes = JSON.parse(localStorage['deportes']);

		


		var tablaPadre = document.getElementsByTagName('table')[0];

		
		var nuevaFila = tablaPadre.insertRow(i+1);
 		
 		if (nombre[i]!=0) {
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
		celda2.innerHTML = nombre[i];
		celda3.innerHTML = img[i];
		celda4.innerHTML = fecha[i];
		celda5.innerHTML = precio[i];
		celda6.innerHTML = unit[i];
		celda7.innerHTML = descrip[i];
		celda8.innerHTML = dirigido[i];
		celda9.innerHTML = categoria[i];
		celda10.innerHTML = cantidad[i];
		celda11.innerHTML = deportes[i];

		id=id+1;
		} 
	}
	
	

}

$("document").ready(function(){
	llenarTabla();
});