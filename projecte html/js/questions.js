var formElement=null;
var respuestaText1=null;
var respuestaText2=null;
var respuestaSelect1=null;
var respuestaSelect2=null;
var respuestaRadio1=null;
var respuestaRadio2=null;
var respuestaCheckbox1 = [];
var respuestaCheckbox2 = [];
var respuestaMult1 = [];
var respuestaMult2 = [];
var nota = 0;  //nota de la prueba sobre 10 puntos (hay 10 preguntas)




window.onload = function(){ 

 formElement=document.getElementById('myForm');
 
 formElement.onsubmit=function(){
   inicializar();
   if (comprobar()){
	corregirRadio1();
    corregirText1();
	corregirCheckbox1();
	corregirSelect1();
	corregirMult1();
	corregirText2();
    corregirMult2();
    corregirRadio2();
	corregirSelect2();
	corregirCheckbox2();
    presentarNota();
   }
   return false;
 }
 
 
 
 
 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET","https://rawgit.com/juanmirp/Questionari/master/projecte%20html/PreguntasXML.xml", true);
xhttp.send();
}




function gestionarXml(dadesXml){
	
	var xmlDoc = dadesXml.responseXML;
	
	//Radio 1

	 var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
	 var opcionsRadio=[];
	 var nopt = xmlDoc.getElementById("p01").getElementsByTagName('option').length;
	 for (i=0; i<nopt;i++){
		 
		 opcionsRadio[i]=xmlDoc.getElementById("p01").getElementsByTagName('option')[i].innerHTML;
	
	 }
	 
	  ponerDatosRadio1(tituloInput,opcionsRadio);
	  
	 respuestaRadio1 = xmlDoc.getElementById("p01").getElementsByTagName("answer")[0].innerHTML;
	  
	  
    //Text 1
	var tituloInput1=xmlDoc.getElementsByTagName("title")[1].innerHTML;
    ponerTituloText1(tituloInput1);
	
	respuestaText1=xmlDoc.getElementsByTagName("answer")[1].innerHTML;
	
	
	//Checkbox 1
	
	 var tituloCheckbox1 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
     var opcionesCheckbox1 = [];
     var nopt = xmlDoc.getElementById("p03").getElementsByTagName('option').length;
     for (i = 0; i < nopt; i++) { 
     opcionesCheckbox1[i]=xmlDoc.getElementById("p03").getElementsByTagName('option')[i].innerHTML;
     }  
     ponerDatosCheckboxHtml(tituloCheckbox1,opcionesCheckbox1);
	 
	     var nresc1 = xmlDoc.getElementById("p03").getElementsByTagName('answer').length;
         for (i = 0; i < nresc1; i++) {
        respuestaCheckbox1[i] = xmlDoc.getElementById("p03").getElementsByTagName("answer")[i].innerHTML;
    }
	 
	   
	 //Select 1
	  var tituloSelect1=xmlDoc.getElementsByTagName("title")[3].innerHTML;
      var opcionesSelect1 = [];
      var nopt = xmlDoc.getElementById("p04").getElementsByTagName('option').length;
      for (i = 0; i < nopt; i++) { 
      opcionesSelect1[i] = xmlDoc.getElementById("p04").getElementsByTagName('option')[i].innerHTML;
      }
     ponerDatosSelectHtml1(tituloSelect1,opcionesSelect1);
	 
	  respuestaSelect1=parseInt(xmlDoc.getElementsByTagName('answer')[3].innerHTML);
	  
	  //Multilpe 1
	  
	  var tituloMultiple1 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesMultiple1 = [];
    var nopt = xmlDoc.getElementById("p05").getElementsByTagName('option').length;
    for (i = 0; i < nopt; i++) {
        opcionesMultiple1[i] = xmlDoc.getElementById("p05").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultiple1(tituloMultiple1, opcionesMultiple1);
	
	var nres1 = xmlDoc.getElementById("p05").getElementsByTagName('answer').length;
     for (i = 0; i < nres1; i++) { 
       respuestaMult1[i]=xmlDoc.getElementById("p05").getElementsByTagName("answer")[i].innerHTML;
       }
	
	
	//Text 2
	var tituloInput2=xmlDoc.getElementsByTagName("title")[5].innerHTML;
    ponerTituloText2(tituloInput2);
	
	respuestaText2=xmlDoc.getElementsByTagName("answer")[7].innerHTML;
	
	//Multilpe 2
	  
	  var tituloMultiple2 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesMultiple2 = [];
    var nopt2 = xmlDoc.getElementById("p07").getElementsByTagName('option').length;
    for (i = 0; i < nopt2; i++) {
        opcionesMultiple2[i] = xmlDoc.getElementById("p07").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultiple2(tituloMultiple2, opcionesMultiple2);
	
	var nres2 = xmlDoc.getElementById("p07").getElementsByTagName('answer').length;
     for (i = 0; i < nres2; i++) { 
       respuestaMult2[i]=xmlDoc.getElementById("p07").getElementsByTagName("answer")[i].innerHTML;
       }
	   
	//Radio 2

	 var tituloInput2=xmlDoc.getElementsByTagName("title")[7].innerHTML;
    
	 var opcionsRadio2=[];
	 var nopt2 = xmlDoc.getElementById("p08").getElementsByTagName('option').length;
	 for (i=0; i<nopt2;i++){
		 
		 opcionsRadio2[i]=xmlDoc.getElementById("p08").getElementsByTagName('option')[i].innerHTML;
	
	 }
	  ponerDatosRadio2(tituloInput2,opcionsRadio2);
	  
	  respuestaRadio2 = xmlDoc.getElementById("p08").getElementsByTagName("answer")[0].innerHTML;
	  
	  
	  
	  
	  //Select 2
	  var tituloSelect2=xmlDoc.getElementsByTagName("title")[8].innerHTML;
      var opcionesSelect2 = [];
      var nopt2 = xmlDoc.getElementById("p09").getElementsByTagName('option').length;
      for (i = 0; i < nopt2; i++) { 
      opcionesSelect2[i] = xmlDoc.getElementById("p09").getElementsByTagName('option')[i].innerHTML;
      }
     ponerDatosSelectHtml2(tituloSelect2,opcionesSelect2);
	 
	  respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[12].innerHTML);
	 
	 //Checkbox 2
	
	 var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
     var opcionesCheckbox2 = [];
     var nopt2 = xmlDoc.getElementById("p10").getElementsByTagName('option').length;
     for (i = 0; i < nopt2; i++) { 
     opcionesCheckbox2[i]=xmlDoc.getElementById("p10").getElementsByTagName('option')[i].innerHTML;
     }  
	 
     ponerDatosCheckboxHtml2(tituloCheckbox2,opcionesCheckbox2);
	 
	 var nresc2 = xmlDoc.getElementById("p10").getElementsByTagName('answer').length;
	 for (i = 0; i < nresc2; i++) {
		 
        respuestaCheckbox2[i] = xmlDoc.getElementById("p10").getElementsByTagName("answer")[i].innerHTML;
    }
	 
	
}


function ponerDatosMultiple2(tituloMultiple, opciones) {
    document.getElementById("tituloMultiple2").innerHTML = tituloMultiple;
    var select = document.getElementsByTagName("select")[2];
    for (i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.text = opciones[i];
        option.value = i;
		option.className="multiple2";
        select.options.add(option);
    }
}

function ponerDatosMultiple1(tituloMultiple, opciones) {
    document.getElementById("tituloMultiple1").innerHTML = tituloMultiple;
    var select = document.getElementsByTagName("select")[1];
    for (i = 0; i < opciones.length; i++) {
        var option = document.createElement("option");
        option.text = opciones[i];
        option.value = i;
		option.className="multiple1";
        select.options.add(option);
    }
}

function ponerDatosSelectHtml1(t,opt){
  document.getElementById("tituloSelect1").innerHTML=t;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtml2(t,opt){
  document.getElementById("tituloSelect2").innerHTML=t;
  var select = document.getElementsByTagName("select")[3];
  for (i = 0; i < opt.length; i++) { 
    var option = document.createElement("option");
    option.text = opt[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosRadio1(t,opt){
	var RadioContainer=document.getElementById('RadioDiv1');
	document.getElementById("tituloRadio1").innerHTML=t;
	
	for(i=0;i<opt.length;i++){
		var input = document.createElement("input");
        var label = document.createElement("label");
		label.innerHTML=opt[i];
        label.setAttribute("for", "respuesta_"+i);
        input.type="radio";
        input.name="respuesta";
        input.id="respuesta_"+i;;    
    RadioContainer.appendChild(input);
    RadioContainer.appendChild(label);
    RadioContainer.appendChild(document.createElement("br"));
		
	}
	
}

function ponerDatosRadio2(t,opt){
	var RadioContainer=document.getElementById('RadioDiv2');
	document.getElementById("tituloRadio2").innerHTML=t;
	
	for(i=0;i<opt.length;i++){
		var input = document.createElement("input");
        var label = document.createElement("label");
		label.innerHTML=opt[i];
        label.setAttribute("for", "respuesta2_"+i);
        input.type="radio";
        input.name="respuesta2";
        input.id="respuesta2_"+i;;    
    RadioContainer.appendChild(input);
    RadioContainer.appendChild(label);
    RadioContainer.appendChild(document.createElement("br"));
		
	}
	
}



function ponerTituloText1(p){
	
	
	document.getElementById("tituloText1").innerHTML=p;
	
}

function ponerTituloText2(p){
	
	document.getElementById("tituloText2").innerHTML=p;
	
}

function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('CheckBoxDiv1');
 document.getElementById('tituloCheck1').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "isla_"+i);
    input.type="checkbox";
    input.name="isla";
    input.id="isla_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  
}

function ponerDatosCheckboxHtml2(t,opt){
 var checkboxContainer=document.getElementById('CheckBoxDiv2');
 document.getElementById('tituloCheck2').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
 }  
}

function corregirSelect1(){
  
  var sel = formElement.elements[9];  
  if (sel.selectedIndex==respuestaSelect1) { //-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
   darRespuestaHtml("P4: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P4: Incorrecto");
}

function corregirSelect2(){
  
  var sel = formElement.elements[17];  
  if (sel.selectedIndex==respuestaSelect2) { 
   darRespuestaHtml("P9: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P9: Incorrecto");
}

function corregirText1(){
	var s = document.getElementById("text1").value;  
	  s.toLowerCase;
  if (s==respuestaText1) { 
   darRespuestaHtml("P2: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P2: Incorrecto");
	
	
}

function corregirText2(){
	var s = document.getElementById("text2").value;  
	  s.toLowerCase;
	  
  if (s==respuestaText2) { 
   darRespuestaHtml("P6: Correcto");
   nota +=1;
  }
  else darRespuestaHtml("P6: Incorrecto");
	
	
}

function corregirCheckbox1(){
	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.isla.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.isla[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestaCheckbox1.length; j++) {
     if (i+1==respuestaCheckbox1[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/respuestaCheckbox1.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: posición selecionada "+i+" correcta");    
    } else {
     nota -=1.0/respuestaCheckbox1.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P3: posición selecionada "+i+" incorrecta");
    }   
   } 
  }	
}

function corregirCheckbox2(){
	 
	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  //"color" es el nombre asignado a todos los checkbox
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestaCheckbox2.length; j++) {
     if (i+1==respuestaCheckbox2[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/respuestaCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P10:  posición selecionada " +i+" correcta");    
    } else {
     nota -=1.0/respuestaCheckbox2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P10: posición selecionada "+i+" incorrecta");
    }   
   } 
  }

  
}

function presentarNota(){
	darRespuestaHtml("Nota: "+Math.round(nota)+" puntos sobre 10");
}

function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadoDiv').appendChild(p);
}

function corregirMult1(){
	 
  var f=document.getElementsByClassName("multiple1");
  var escorrecta = [];
  for (i = 0; i < f.length; i++) {  
   if (f[i].selected) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestaMult1.length; j++) {
     if (i+1==respuestaMult1[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/respuestaMult1.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P5: posición selecionada "+i+"  correcta");    
    } else {
     nota -=1.0/respuestaMult1.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P5: posición selecionada "+i+" incorrecta");
    }   
   } 
  }	
}

function corregirMult2(){
	 	 
  var f=document.getElementsByClassName("multiple2");
  var escorrecta = [];
  for (i = 0; i < f.length; i++) {  
   if (f[i].selected) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestaMult2.length; j++) {
     if (i+1==respuestaMult2[j]) escorrecta[i]=true;
    }
    //si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.
    if (escorrecta[i]) {
     nota +=1.0/respuestaMult2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P7: "+i+" correcta");    
    } else {
     nota -=1.0/respuestaMult2.length;  //dividido por el número de respuestas correctas   
     darRespuestaHtml("P7: "+i+" incorrecta");
    }   
   } 
  }	
	 
 }


function corregirRadio1(){
	 var f=formElement;
	 var escorrecta = null;
	 
	  for (i = 0; i < f.respuesta.length; i++) {
        if (f.respuesta[i].checked) {
            escorrecta = false;
            if (i + 1 == respuestaRadio1)
                escorrecta = true;

            if (escorrecta) {
                nota += 1.0;
                darRespuestaHtml("P1: Correcta");
            } else {
                nota -= 1.0;
                darRespuestaHtml("P1: Incorrecta");
            }
        }
    }
	 
		
}


function corregirRadio2(){
	  var f=formElement;
	 var escorrecta = null;
	 
	  for (i = 0; i < f.respuesta2.length; i++) {
        if (f.respuesta2[i].checked) {
            escorrecta = false;
            if (i + 1 == respuestaRadio2)
                escorrecta = true;

            if (escorrecta) {
                nota += 1.0;
                darRespuestaHtml("P8: Correcta");
            } else {
                nota -= 1.0;
                darRespuestaHtml("P8: Incorrecta");
            }
        }
    }
}
	 


	 function inicializar(){
	document.getElementById('resultadoDiv').innerHTML = "";
    nota = 0.0;
}
	 
 
 function comprobar(){
	 var f = formElement;
    //Pregunta 1
    var checked = false;
    for (i = 0; i < f.respuesta.length; i++) {
        if (f.respuesta[i].checked)
            checked = true;
    }
    if (!checked) {
        document.getElementsByTagName("h3")[0].focus();
        alert("Selecciona una opción de la pregunta 1");
        return false;
    }
    //Pregunta 2
    if (document.getElementById("text1").value == "") {
        f.elements[4].focus();
        alert("Escribe una respuesta en la pregunta 2");
        return false;
    }
    //Pregunta 3
    checked = false;
    for (i = 0; i < f.isla.length; i++) {
        if (f.isla[i].checked)
            checked = true;
    }
    if (!checked) {
        document.getElementsByTagName("h3")[2].focus();
        alert("Selecciona una opción de la pregunta 3");
        return false;
    }
    //Pregunta 4
    if (f.elements[9].selectedIndex == 0) {
        f.elements[9].focus();
        alert("Selecciona una opción en la pregunta 4");
        return false;
    }
    //Pregunta 5
    if (f.elements[10].selectedIndex == 0) {
        f.elements[10].focus();
        alert("Selecciona una o más opciones en la pregunta 5");
        return false;
    }
    //Pregunta 6
    if (document.getElementById("text2").value == "") {
        f.elements[11].focus();
        alert("Escribe una respuesta en la pregunta 6");
        return false;
    }
    //Pregunta 7
    if (f.elements[12].selectedIndex == 0) {
        f.elements[12].focus();
        alert("Selecciona una o más opciones en la pregunta 7");
        return false;
    }
    //Pregunta 8
    checked = false;
    for (i = 0; i < f.respuesta2.length; i++) {
        if (f.respuesta2[i].checked)
            checked = true;
    }
    if (!checked) {
        document.getElementsByTagName("h3")[7].focus();
        alert("Selecciona una opción de la pregunta 8");
        return false;
    }
    //Pregunta 9
    if (f.elements[17].selectedIndex == 0) {
        f.elements[17].focus();
        alert("Selecciona una o más opciones en la pregunta 9");
        return false;
    }
    //Pregunta 10
    checked = false;
    for (i = 0; i < f.color.length; i++) {
        if (f.color[i].checked)
            checked = true;
    }
    if (!checked) {
        document.getElementsByTagName("h3")[9].focus();
        alert("Selecciona una opción de la pregunta 10");
        return false;
    }
    return true;
	
}
  
 
 
 
  
	 
 
 
 
 
 
 
 
 





