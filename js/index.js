function accesso(){
	if (document.getElementById('pass').value!="Productos") {
		alert("password incorrecto");
	}else{
		window.location = document.getElementById("pass").value + ".html"
	}
	
}
window.onload = function(){ 

document.getElementById('btnLog').onclick = function() {accesso()};
 // id=parseInt(localStorage.getItem('ids'));

};
