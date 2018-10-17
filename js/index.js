$("document").ready(function(){
	$("#btnLog").click(function(){
	
		if (document.getElementById('pass').value!="back") {
			alert("password incorrecto");
		}else{
			window.location = "back.html"
		}

});
	});

