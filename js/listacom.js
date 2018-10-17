var id = 0;
var nombres = JSON.parse(localStorage['nombrescom']);
var numeros = JSON.parse(localStorage['numerocont']);
var correos = JSON.parse(localStorage['correo']);
var comentarios = JSON.parse(localStorage['comentariocont']);
var cide = parseInt(localStorage.getItem('cids'));



$("document").ready(function(){
	for (var i = 0; i < cide; i++) {

		var tablaPadre = document.getElementsByTagName('table')[0];
		var nuevaFila = tablaPadre.insertRow(i+1);

		var celda1 = nuevaFila.insertCell(0);
		var celda2 = nuevaFila.insertCell(1);
		var celda3 = nuevaFila.insertCell(2);
		var celda4 = nuevaFila.insertCell(3);
		var celda5 = nuevaFila.insertCell(4);

		celda1.innerHTML = id;
		celda2.innerHTML = nombres[i];
		celda3.innerHTML = numeros[i];
		celda4.innerHTML = correos[i];
		celda5.innerHTML = comentarios[i];

		id=id+1;

	}
});
