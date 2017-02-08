

window.onload = function(){ 
 
 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET","PreguntasXML.xml", true);
xhttp.send();
}


function gestionarXml(dadesXml){
	
	var xmlDoc = dadesXml.responseXML;
	var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
    ponerTitulo(tituloInput);
 
}


function ponerTitulo(p){
	
	document.getElementById("titulo").innerHTML=p;
}
