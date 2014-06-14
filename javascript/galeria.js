$(function(){
	var principalContenedor = $("#contenedor-imagen");
	var principalImagen = $("#contenedor-imagen img");
	var preview = $(".imagen-preview");
	var descripcion = $("#descripcion-imagen");
	
	preview.click(function(evento){
		var cajita = $(evento.target);
		var ruta = cajita.data("src");	
		var texto = cajita.data("descripcion");
		
		principalContenedor.fadeOut(1500, function(){
			principalImagen.attr("src", ruta);
			descripcion.html(texto);
			principalContenedor.fadeIn(1500);
		});
		
	});
});
