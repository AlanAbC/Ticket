$(document).ready(function(){
	$('html').niceScroll();
	$(document).foundation();
});

$(window).load(function(){
	cargarEventos();
});

function cargarEventos(){

	//Obtener valor por vet para el filtro por categoria
	var categoria = $.getURLParam("c");
	console.log(categoria);

	//Validaciones para determinar si mostrara todos los eventos o los filtrara por categoria
	if(categoria == undefined){
        llenarEventos("getEventos")
	}else{
		if(categoria == "concierto"){
            llenarEventos("getConciertos");
		}else if(categoria == "teatro"){
            llenarEventos("getTeatro");
		}else if(categoria == "deporte"){
            llenarEventos("getDeportes");
		}else if(categoria == "cultural"){
            llenarEventos("getCulturales");
		}else{
            llenarEventos("getConciertos");
        }
	}
}

function llenarEventos(categoria){
    // Conexion con la api pidiendo todos los eventos existentes
    $.getJSON("http://localhost/api/eventos.php?a=" + categoria,function(data){

        // Obtencion de la respuesta de la api
        var respuesta = data['res'];

        // Comprobacion del resultado, en caso de que sea 1 rellena la paguina con
        // los eventos disponibles, en caso de que sea 0 muestra mensaje en pantalla
        // de las respuesta de la api
        if (respuesta === "1") {

            // Asignacion del contenedor de los eventos
            var contenedor = $('#eventos');

            //Aqui va la la creacion de los eventos a mostrar
            $.each(data['eventos'], function(i, item){
                var evento = '<div class="small-12 medium-4 large-2 end columns evento" id= "' + item.id + '">' +
                    '<img src="' + item.foto + '">' +
                    '<p class="titulo_evento">' + item.nombre + '</p>' +
                    '</div>';
                contenedor.append(evento);
            });
        } else if (respuesta === "0") {
            //Aqui regresa msg de error de la api
            swal({
                title: data['msg'],
                type: 'error',
                confirmButtonText: 'Continuar'
            });
        }

    });
}

/* Copyright (c) 2006 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Thanks to Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 */
jQuery.extend({
    /**
     * Returns get parameters.
     *
     * If the desired param does not exist, null will be returned
     *
     * @example value = $.getURLParam("paramName");
     */
    getURLParam: function(strParamName){
        var strReturn = "";
        var strHref = window.location.href;
        var bFound=false;

        var cmpstring = strParamName + "=";
        var cmplen = cmpstring.length;

        if ( strHref.indexOf("?") > -1 ){
            var strQueryString = strHref.substr(strHref.indexOf("?")+1);
            var aQueryString = strQueryString.split("&");
            for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
                if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
                    var aParam = aQueryString[iParam].split("=");
                    strReturn = aParam[1];
                    bFound=true;
                    break;
                }

            }
        }
        if (bFound==false) return null;
        return strReturn;
    }
});