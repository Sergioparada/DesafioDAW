$("document").ready(function(){
	var select = document.getElementById('opcion');
	
	if(localStorage["ids"]) {
  		producto = JSON.parse(localStorage['producto']);
  	}

	for(var i = 0; i < producto.length; i++) {
		if (producto[i]!=0) {
	    var opt = i +". " + producto[i];
	    var opt2 = i;
	    var el = document.createElement("option");
	    el.textContent = opt;
	    el.value = opt2;
	    select.appendChild(el);
	    }
	}

		$('#opcion').on("change", function() {
	    // Pure JS
	    var selectedVal = this.value;
	    
		if(localStorage["ids"]) {
			var producto = JSON.parse(localStorage['producto']);
			var tipos = JSON.parse(localStorage['tipos']);
			var fotosReal = JSON.parse(localStorage['fotosReal']);
			var fechas = JSON.parse(localStorage['fechas']);
			var precios = JSON.parse(localStorage['precios']);
			var unidad = JSON.parse(localStorage['unidad']);
			var desc = JSON.parse(localStorage['desc']);
			var cantidad = JSON.parse(localStorage['cantidad']);
			var id=parseInt(localStorage.getItem('ids'));
			var cat = JSON.parse(localStorage['cat']);
			var deportes = JSON.parse(localStorage['deportes']);
			console.log(id);
		}
		$("#nomProd").val(producto[selectedVal]);
		$("#photoPath").val(fotosReal[selectedVal]);
		$("#fechaIntro").val(fechas[selectedVal]);
		$("#precioProd").val(precios[selectedVal]);
		$("#unidadVenta").val(unidad[selectedVal]);
		$("#descProd").val(desc[selectedVal]);

		if(cat[selectedVal] == 'Caballeros')
		$("#Caballeros").prop("checked", true);

		if(cat[selectedVal] == 'Damas')
		$("#Damas").prop("checked", true);

		if(cat[selectedVal] == 'Ninos')
		$("#Ninos").prop("checked", true);

		if(cat[selectedVal] == 'Ninas')
		$("#Ninas").prop("checked", true);

		

		if(tipos[selectedVal] == 'Camisas')
		$("#tiposProd").val('Camisas');

		if(tipos[selectedVal] == 'Shorts')
		$("#tiposProd").val('Shorts');

		if(tipos[selectedVal] == 'Pantalones')
		$("#tiposProd").val('Pantalones');

		if(tipos[selectedVal] == 'Chaquetas')
		$("#tiposProd").val('Chaquetas');

		if(tipos[selectedVal] == 'Trajes')
		$("#tiposProd").val('Trajes');

		if(tipos[selectedVal] == 'Calzonetas')
		$("#tiposProd").val('Calzonetas');

		if(deportes[selectedVal] == 'Ninos')
		$("#Ninos").prop("checked", true);

		if(deportes[selectedVal] == 'Ninos')
		$("#Ninos").prop("checked", true);

		if(deportes[selectedVal] == 'Ninos')
		$("#Ninos").prop("checked", true);



		if(cantidad[selectedVal] == '100')
		$("#100").prop("checked", true);

		if(cantidad[selectedVal] == '300')
			$("#300").prop("checked", true);

		if(cantidad[selectedVal] == '500')
			$("#500").prop("checked", true);

		if(cantidad[selectedVal] == '800')
			$("#800").prop("checked", true);

		if(cantidad[selectedVal] == '1000')
			$("#1000").prop("checked", true);

		if(cantidad[selectedVal] == '1500')
			$("#1500").prop("checked", true);

	});

	$("#btnEditar").click(function(){

		var fotos = [];
		var producto = JSON.parse(localStorage['producto']);
		var tipos = JSON.parse(localStorage['tipos']);
		var fotosReal = JSON.parse(localStorage['fotosReal']);
		var fechas = JSON.parse(localStorage['fechas']);
		var precios = JSON.parse(localStorage['precios']);
		var unidad = JSON.parse(localStorage['unidad']);
		var desc = JSON.parse(localStorage['desc']);
		var cantidad = JSON.parse(localStorage['cantidad']);
		var id=parseInt(localStorage.getItem('ids'));
		var cat = JSON.parse(localStorage['cat']);
		var deportes = JSON.parse(localStorage['deportes']);

		  producto[document.getElementById("opcion").value]=document.getElementById("nomProd").value;
		  tipos[document.getElementById("opcion").value]=document.getElementById("tiposProd").value;
		  fechas[document.getElementById("opcion").value]=document.getElementById("fechaIntro").value;
		  precios[document.getElementById("opcion").value]=document.getElementById("precioProd").value;
		  unidad[document.getElementById("opcion").value]=document.getElementById("unidadVenta").value;
		  desc[document.getElementById("opcion").value]=document.getElementById("descProd").value;
		  cat[document.getElementById("opcion").value]=document.querySelector('input[name="grupo"]:checked').value; //dirigido a 
		  cantidad[document.getElementById("opcion").value]=document.querySelector('input[name="stock"]:checked').value;
		  deportes[document.getElementById("opcion").value]=document.querySelector('input[name="depor"]:checked').value;

		 	fotos[document.getElementById("opcion").value] = document.getElementById('fotoPath').value;
			if (fotos[document.getElementById("opcion").value]) {
				    var startIndex = (fotos[document.getElementById("opcion").value].indexOf('\\') >= 0 ? fotos[document.getElementById("opcion").value].lastIndexOf('\\') : fotos[document.getElementById("opcion").value].lastIndexOf('/'));
				    fotosReal[document.getElementById("opcion").value] = fotos[document.getElementById("opcion").value].substring(startIndex);
				    if (fotosReal[document.getElementById("opcion").value].indexOf('\\') === 0 || fotosReal[document.getElementById("opcion").value].indexOf('/') === 0) {
				        fotosReal[document.getElementById("opcion").value] = fotosReal[document.getElementById("opcion").value].substring(1);
			    }	    
			}

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

		  alert("Se ha editado con exito!");
		  location.reload();
	});

	$("#btnBorrar").click(function(){
		var fotos = [];
		var producto = JSON.parse(localStorage['producto']);
		var tipos = JSON.parse(localStorage['tipos']);
		var fotosReal = JSON.parse(localStorage['fotosReal']);
		var fechas = JSON.parse(localStorage['fechas']);
		var precios = JSON.parse(localStorage['precios']);
		var unidad = JSON.parse(localStorage['unidad']);
		var desc = JSON.parse(localStorage['desc']);
		var cantidad = JSON.parse(localStorage['cantidad']);
		var id=parseInt(localStorage.getItem('ids'));
		var cat = JSON.parse(localStorage['cat']);
		var deportes = JSON.parse(localStorage['deportes']);

		producto[document.getElementById("opcion").value]=0;
		tipos[document.getElementById("opcion").value]=0;
		fechas[document.getElementById("opcion").value]=0;
		precios[document.getElementById("opcion").value]=0;
		unidad[document.getElementById("opcion").value]=0;
		desc[document.getElementById("opcion").value]=0;
		cat[document.getElementById("opcion").value]=0;
		cantidad[document.getElementById("opcion").value]=0;
		deportes[document.getElementById("opcion").value]=0;
		fotosReal[document.getElementById("opcion").value] = 0;

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

		 

		  alert("Producto se ha borrado con exito!");
		  location.reload();

	});
});

