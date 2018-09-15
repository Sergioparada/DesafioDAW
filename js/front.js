var j ;
var imagenes = [];
var nombres = [];

j=parseInt(localStorage.getItem('ids'));
nombres = JSON.parse(localStorage['producto']);
imagenes = JSON.parse(localStorage['fotosReal']);

function agregarDiv(){
	for (var i = 0; i < j; i++) {
		
	var newDiv = document.createElement('div');
	newDiv.className = 'product-item';
	document.getElementById('sect').appendChild(newDiv);
	var innerImg = document.createElement('img');
	innerImg.src = "img/" + imagenes[i];
	newDiv.appendChild(innerImg);
	var innerA = document.createElement('a');
	innerA.href="#";
	var texto = document.createTextNode(nombres[i]);
	innerA.appendChild(texto);
	newDiv.appendChild(innerA);
	}
};

window.onload = function(){ 

agregarDiv();
};