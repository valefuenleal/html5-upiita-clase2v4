$(function(){
	var cerrar = $("#cerrar");
	var elEnlace = cerrar[0];
	var cajaRedes = $("#imagenes-redes");
	
	cerrar.click(function(){
		if(cerrar.html() == "cerrar"){		
			cajaRedes.fadeOut("slow", function(){
				cerrar.html("abrir");
			});		
		} else{		
			cajaRedes.fadeIn("slow", function(){
				cerrar.html("cerrar");
			});
		}
		return false;
	});
});
