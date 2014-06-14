//1.-Configuramos express
var express = require("express");
var nunjucks = require("nunjucks");

//2.-para acceder a express una app
var app = express();

//escuchamos peticiones
app.listen(8080);

console.log("Servidor levantado");

nunjucks.configure(__dirname + "/vistas",{
	express:app
});

//responder a peticiones GET
app.get("/", function(request, response){
	//response.send("Iniicio");
	response.render("index.html");
});
