var producto = [];
var tipos = [];
var fotos = [];
var fechas = [];
var precios = [];
var id = 0;
var fotosReal =[];
var unidad=[];
var desc=[];
var cat=[];
var cantidad=[];
var deportes=[];

if(localStorage["ids"]) {
  producto = JSON.parse(localStorage['producto']);
  tipos = JSON.parse(localStorage['tipos']);
  fotosReal = JSON.parse(localStorage['fotosReal']);
  fechas = JSON.parse(localStorage['fechas']);
  precios = JSON.parse(localStorage['precios']);
  unidad = JSON.parse(localStorage['unidad']);
  desc = JSON.parse(localStorage['desc']);
  cantidad = JSON.parse(localStorage['cantidad']);
  cat = JSON.parse(localStorage['cat']);
  deportes = JSON.parse(localStorage['deportes']);

   id=parseInt(localStorage.getItem('ids'));
  console.log(id);
}

function guardarProd(){
  producto[id]=document.getElementById("nomProd").value;
  tipos[id]=document.getElementById("tiposProd").value;
 
  fechas[id]=document.getElementById("fechaIntro").value;
  precios[id]=document.getElementById("precioProd").value;
  unidad[id]=document.getElementById("unidadVenta").value;
  desc[id]=document.getElementById("descProd").value;
  cat[id]=document.querySelector('input[name="grupo"]:checked').value; //dirigido a 
  cantidad[id]=document.querySelector('input[name="stock"]:checked').value;
  
  deportes[id]=document.querySelector('input[name="depor"]:checked').value;

 	fotos[id] = document.getElementById('fotoPath').value;
	if (fotos[id]) {
		    var startIndex = (fotos[id].indexOf('\\') >= 0 ? fotos[id].lastIndexOf('\\') : fotos[id].lastIndexOf('/'));
		    fotosReal[id] = fotos[id].substring(startIndex);
		    if (fotosReal[id].indexOf('\\') === 0 || fotosReal[id].indexOf('/') === 0) {
		        fotosReal[id] = fotosReal[id].substring(1);
	    }	    
	}

  id=id+1;
  localStorage.setItem('ids', id);
 // 
 
 
 
  console.log(producto);
  console.log(tipos);
  
  console.log(id);
  console.log(fotosReal);
  console.log(fechas);
  console.log(precios);
  console.log(unidad);
  console.log(desc);
  console.log(cat);

  var JSONguardarProducto = JSON.stringify(producto);
  localStorage.setItem('producto', JSONguardarProducto);
  producto = JSON.parse(localStorage['producto']);

  var JSONguardarTipos = JSON.stringify(tipos);
  localStorage.setItem('tipos', JSONguardarTipos);
  tipos = JSON.parse(localStorage['tipos']);

  var JSONguardarFotos = JSON.stringify(fotosReal);
  localStorage.setItem('fotosReal', JSONguardarFotos);
  fotosReal = JSON.parse(localStorage['fotosReal']);

  var JSONguardarFechas = JSON.stringify(fechas);
  localStorage.setItem('fechas', JSONguardarFechas);
  fechas = JSON.parse(localStorage['fechas']);

  var JSONguardarPrecios = JSON.stringify(precios);
  localStorage.setItem('precios', JSONguardarPrecios);
  precios = JSON.parse(localStorage['precios']);

  var JSONguardarUnidad = JSON.stringify(unidad);
  localStorage.setItem('unidad', JSONguardarUnidad);
  unidad = JSON.parse(localStorage['unidad']);

  var JSONguardarDesc = JSON.stringify(desc);
  localStorage.setItem('desc', JSONguardarDesc);
  desc = JSON.parse(localStorage['desc']);

  var JSONguardarCant = JSON.stringify(cantidad);
  localStorage.setItem('cantidad', JSONguardarCant);
  cantidad = JSON.parse(localStorage['cantidad']);

  var JSONguardarCat = JSON.stringify(cat);
  localStorage.setItem('cat', JSONguardarCat);
  cat = JSON.parse(localStorage['cat']);

  var JSONguardarDep = JSON.stringify(deportes);
  localStorage.setItem('deportes', JSONguardarDep);
  deportes = JSON.parse(localStorage['deportes']);

}



$("document").ready(function(){
  $('#btnAceptarNom').click(function(){
    guardarProd();
    alert("Se ha ingresado con exito!");
    location.reload();
  });
});
 