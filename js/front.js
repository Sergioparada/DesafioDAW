var j ;
var imagenes = [];
var nombres = [];
var deporte = [];


j=parseInt(localStorage.getItem('ids'));
nombres = JSON.parse(localStorage['producto']);
imagenes = JSON.parse(localStorage['fotosReal']);
deporte = JSON.parse(localStorage['deportes'])

function agregarDiv(){
	for (var i = 0; i < j; i++) {
		
	if (nombres[i]!=0) {

	var newDiv = document.createElement('div');
	newDiv.className = 'product-item';
	$('#sect').append(newDiv);
	var innerImg = document.createElement('img');
	innerImg.src = "img/" + imagenes[i];
	newDiv.appendChild(innerImg);
	var innerA = document.createElement('a');
	innerA.href="#";
	var texto = document.createTextNode(nombres[i]);
	innerA.appendChild(texto);
	newDiv.appendChild(innerA);
		}
	}
};

function busquedaProd(){
 
	while (newDiv.firstChild) {
	    newDiv.removeChild(newDiv.firstChild);
	}
}



$("document").ready(function(){
	agregarDiv();

	$("#btnBusqueda").click(function(){
    while (sect.firstChild) {
	    sect.removeChild(sect.firstChild);
	}

	for (var j=0; j<nombres.length; j++) {
		if (nombres[j]!=0) {
        if (nombres[j].match(document.getElementById('txtBusqueda').value)){
        	var newDiv = document.createElement('div');
			newDiv.className = 'product-item';
			$('#sect').append(newDiv);
			var innerImg = document.createElement('img');
			innerImg.src = "img/" + imagenes[j];
			newDiv.appendChild(innerImg);
			var innerA = document.createElement('a');
			innerA.href="#";
			var texto = document.createTextNode(nombres[j]);
			innerA.appendChild(texto);
			newDiv.appendChild(innerA);
        } else if (((nombres[j]).toLowerCase()).match(document.getElementById('txtBusqueda').value)){
        	var newDiv = document.createElement('div');
			newDiv.className = 'product-item';
			$('#sect').append(newDiv);
			var innerImg = document.createElement('img');
			innerImg.src = "img/" + imagenes[j];
			newDiv.appendChild(innerImg);
			var innerA = document.createElement('a');
			innerA.href="#";
			var texto = document.createTextNode(nombres[j]);
			innerA.appendChild(texto);
			newDiv.appendChild(innerA);
        } else if (((nombres[j]).toUpperCase()).match(document.getElementById('txtBusqueda').value)){
        	var newDiv = document.createElement('div');
			newDiv.className = 'product-item';
			$('#sect').append(newDiv);
			var innerImg = document.createElement('img');
			innerImg.src = "img/" + imagenes[j];
			newDiv.appendChild(innerImg);
			var innerA = document.createElement('a');
			innerA.href="#";
			var texto = document.createTextNode(nombres[j]);
			innerA.appendChild(texto);
			newDiv.appendChild(innerA);
        } 

    }
    }
});

$("#btnLimpiar").click(function(){

	while (sect.firstChild) {
	    sect.removeChild(sect.firstChild);
	}
	agregarDiv();
});

$("#fut").click(function(){
	while (sect.firstChild) {
	    sect.removeChild(sect.firstChild);
	}
	for (var j=0; j<nombres.length; j++) {
		if (nombres[j]!=0) {
        if (deporte[j].match('Futbol')){
        	var newDiv = document.createElement('div');
			newDiv.className = 'product-item';
			$('#sect').append(newDiv);
			var innerImg = document.createElement('img');
			innerImg.src = "img/" + imagenes[j];
			newDiv.appendChild(innerImg);
			var innerA = document.createElement('a');
			innerA.href="#";
			var texto = document.createTextNode(nombres[j]);
			innerA.appendChild(texto);
			newDiv.appendChild(innerA);
        } 
    }
    }
});

$("#basket").click(function(){
	while (sect.firstChild) {
	    sect.removeChild(sect.firstChild);
	}
	for (var j=0; j<nombres.length; j++) {
		if (nombres[j]!=0) {
        if (deporte[j].match('Basketball')){
        	var newDiv = document.createElement('div');
			newDiv.className = 'product-item';
			$('#sect').append(newDiv);
			var innerImg = document.createElement('img');
			innerImg.src = "img/" + imagenes[j];
			newDiv.appendChild(innerImg);
			var innerA = document.createElement('a');
			innerA.href="#";
			var texto = document.createTextNode(nombres[j]);
			innerA.appendChild(texto);
			newDiv.appendChild(innerA);
        } 
    }
	}
});

$("#base").click(function(){

	while (sect.firstChild) {
	    sect.removeChild(sect.firstChild);
	}
	
	for (var j=0; j<nombres.length; j++) {
		if (nombres[j]!=0) {
        if (deporte[j].match('Baseball')){
        	var newDiv = document.createElement('div');
			newDiv.className = 'product-item';
			$('#sect').append(newDiv);
			var innerImg = document.createElement('img');
			innerImg.src = "img/" + imagenes[j];
			newDiv.appendChild(innerImg);
			var innerA = document.createElement('a');
			innerA.href="#";
			var texto = document.createTextNode(nombres[j]);
			innerA.appendChild(texto);
			newDiv.appendChild(innerA);
        } 
    }
    }
});




});
