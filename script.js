$(document).ready(function(){
	$('html').niceScroll();
	$(document).foundation();

    // Obtencion de la url
    var url = window.location.pathname;

    // Validacion de la url y dependiendo de la misma hace una accion
    if(url == "/Ticket/index.php"){
        cargarEventos();
    }else if(url == "/Ticket/ver_evento.php"){
        cargarEvento();
    }
});

/* INICIO INDEX ------------------------------------------------------------------------------------------------------*/
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
                var evento = '<div class="small-12 medium-4 large-2 end columns eventocon">' +
                                '<div class="evento" id= "' + item.id + '" onclick="verEvento(event)" style="background-image: url('+ item.foto +');" >' +'</div>'+
                                 '<p class="titulo_evento">' + item.nombre + '</p>'+
                                '</div>';

                contenedor.append(evento);
            });
            $("#contenedor").slideToggle("slow");
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

// Funcion encargada de tomar el id del objeto seleccionado y redireccionar a ver evento
function verEvento(e){

    //Obtencion del id del objeto seleccionado
    var id = e.target.id;

    // Redireccionamiento a ver eventos con el id del evento seleccionado
    $(location).attr('href', "ver_evento.php?e=" + id);
}

/* FIN INDEX ---------------------------------------------------------------------------------------------------------*/

/* INICIO VER_EVENTO -------------------------------------------------------------------------------------------------*/

// Funcion encargada de llenar la informacion de un evento para mostrarlo
function cargarEvento(){
    //Obtener valor por vet para el filtro por categoria
    var id = $.getURLParam("e");

    //Validaciones para determinar si mostrara todos los eventos o los filtrara por categoria
    if(id != undefined){
        // Peticion a la api la informcaion del evento
        $.getJSON("http://localhost/api/eventos.php?a=findEvento&id=" + id, function(data){

            // Obtencion de la respuesta de la api
            var respuesta = data['res'];

            // Comprobacion del resultado, en caso de que sea 1 rellena la pagina con
            // los eventos disponibles, en caso de que sea 0 muestra mensaje en pantalla
            // de las respuesta de la api
            if (respuesta === "1") {

                // Llenado de la paguina con la informacion de la api
                $("[id*=img_evento_vista]").attr('src', data['evento']['foto']);
                $("[id*=titulo_evento_vista]").text(data['evento']['nombre']);
                $("[id*=descripcion_evento_vista]").text(data['evento']['descripcion']);
                $('.txt_categoria').text(data['evento']['categoria']);
                $('.txt_lugar').text(data['evento']['lugar']);
                $('.txt_fecha').text(data['evento']['fecha']);
                $('.txt_hora').text(data['evento']['hora']);
                $('.txt_estado').text(data['evento']['estado']);
                $('.txt_ciudad').text(data['evento']['ciudad']);
                $('.txt_direccion').text(data['evento']['direccion']);

                // Peticion a la api para obtener las secciones del evento
                $.getJSON("http://localhost/api/secciones.php?a=getSecciones&id=" + id, function(data){

                    // Obtencion de la respuesta de la api
                    respuesta = data['res'];

                    // Comprobacion de la respuesta de la api, si es 1 rellenara la parte de secciones
                    // con su respectiva informcaion en caso de que sea 0 no mostrara texto de
                    // que no hay secciones para ese evento
                    if(respuesta == "1"){
                        // Asignacion del contenedor de los eventos
                        var contenedor = $('#contenedor_precio');

                        //Aqui va la la creacion de los eventos a mostrar
                        $.each(data['secciones'], function(i, item){
                            var seccion = '<div id="preciostit">' +
                                '<p id="precion"><b>' + item.nombre + '</b></p>' +
                                '<p class="comprar" onclick="comprar(event)" id="' + item.nombre + '">Comprar Boletos</p>' +
                                '<p id="precio">' + item.costo + '</p>' +
                                '</div>';
                            contenedor.append(seccion);
                        });
                    }else{
                        var htmlNoSec = '<p id="precios">Precios</p>' +
                            '<div id="preciostit">' +
                            '<p id="precion"><b>No Hay boletos disponibles para este evento</b></p>' +
                            '</div>';
                        $("#contenedor_precio").html(htmlNoSec);
                    }
                });
            }else{
                //Aqui regresa msg de error de la api
                swal({
                    title: data['msg'],
                    type: 'error',
                    confirmButtonText: 'Continuar'
                });
            }
         });
    }else{
         //Aqui regresa msg de error de la api
         swal({
             title: "No se encontro el evento",
             type: 'error',
             confirmButtonText: 'Continuar'
         });
    }
}

/* FIN VER_EVENTO ----------------------------------------------------------------------------------------------------*/

//funcion para obtener el id del boton para comprar boletos y desplegar la ventana de compra
function comprar(event) {
    var id = event.target.id;
    $("#categoria").text(id);
    $("#vista").css({
        display : 'none' 
    });
    $("#compraboleto").slideToggle("slow");
}

//Funcion para realizar la confirmacion de compra y  enviar los datos a la base de datos 
$("#comprarCon").click(function(event) {

    swal({
        title: '¿Seguro que deseas comprar el boleto?',
          type: 'info',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText:
            'Continuar',
          cancelButtonText:
            'Cancelar' 
        });
});
//Funcion para cancelar la compra del boleto
$("#comprarCan").click(function(event) {

   $("#vista").toggle("slow");
    $("#compraboleto").css({
        display : 'none' 
    });
});
//funcion para agregar elemtos de nueva zona en agregar evento 
$("#agregar_zona").click(function(event) {
    $(this).before("<input type='text' class='nombre_zona' placeholder='Nombre de la zona'> <input type='number' class='lugares_zona' placeholder='Cantidad de lugares'> <input type='number' class='precio_zona' placeholder='$ Precio'>");
});
//funcion para verificar si se desea editar informacion de usuario
$("#act_actualizar").click(function(event) {
    $("#info_usuario").css({
        display: 'none'
    });
    $("#form_info_usuario").slideToggle("slow");
});
//funcion para desplegar mensaje de confirmacion de actualizacion de usuario y para guardar la informacion actualizada7
$("#act_guardar").click(function(event) {
    swal({
        title: '¿Seguro que deseas modificar tu informacion?',
          type: 'info',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText:
            'Continuar',
          cancelButtonText:
            'Cancelar' 
        });
});
//Funcion para la confirmacion de eliminacion de usuario 
$("#act_eliminar").click(function(event) {
    swal({
        title: '¿Seguro que deseas eliminar tu usuario?',
        text: 'Toda tu informacion y eventos asignados seran eliminados',
          type: 'info',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText:
            'Continuar',
          cancelButtonText:
            'Cancelar' 
        });
});
//Funcion para cancelar la edicios de usuario
$("#act_cancelar").click(function(event) {
     $("#info_usuario").slideToggle("slow");
    $("#form_info_usuario").css({
        display: 'none'
    });
});
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