var nombrescom = [];
var numerocont = [];
var correo = [];
var comentario = [];
var check = 0;
var cid =0;

if(localStorage["cids"]) {
  nombrescom = JSON.parse(localStorage['nombrescom']);
  numerocont = JSON.parse(localStorage['numerocont']);
  correo = JSON.parse(localStorage['correo']);
  comentario = JSON.parse(localStorage['comentariocont']);
  cid=parseInt(localStorage.getItem('cids'));
}

function guardarComent(){
	nombrescom[cid]=document.getElementById("txtNombres").value;
	numerocont[cid]=document.getElementById("txtTelefono").value;
	correo[cid]=document.getElementById("txtCorreo").value;
	comentario[cid]=document.getElementById("coment").value;

	  var JSONguardarnombresCom = JSON.stringify(nombrescom);
  localStorage.setItem('nombrescom', JSONguardarnombresCom);
  nombrescom = JSON.parse(localStorage['nombrescom']);

    var JSONguardarTel = JSON.stringify(numerocont);
  localStorage.setItem('numerocont', JSONguardarTel);
  numerocont = JSON.parse(localStorage['numerocont']);

    var JSONguardarCorreo = JSON.stringify(correo);
  localStorage.setItem('correo', JSONguardarCorreo);
  correo = JSON.parse(localStorage['correo']);

    var JSONguardarComent = JSON.stringify(comentario);
  localStorage.setItem('comentariocont', JSONguardarComent);
  comentario = JSON.parse(localStorage['comentariocont']);
  cid=cid+1;
  localStorage.setItem('cids', cid);
  check=1;
  console.log(cid);
};





$("document").ready(function(){
  $("#btnEnviar").click(function(){
    guardarComent();
  });
});