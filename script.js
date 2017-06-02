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
    }else if(url == "/Ticket/info_usuario.php"){
        $("#contenedor").slideToggle("slow");
    }else if(url == "/Ticket/agregar_evento.php"){
        $("#contenedor").slideToggle("slow");
    }else if(url == "/Ticket/modificar_evento.php"){
        $("#contenedor").slideToggle("slow");
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
                                 '<p class="titulo_evento">' + item.nombre.substr(0, 33) + ' ...</p>'+
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
                                '<p class="comprar" onclick="comprar(event)" id="' + item.nombre + ','+item.id+'">Comprar Boletos</p>' +
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

//funcion para obtener el id del boton para comprar boletos y desplegar la ventana de compra
function comprar(event) {
    var id = event.target.id;
    var info = id.split(",");
    $("#categoria").text(info[0]);
    $("#comprarCon").removeClass();
    $("#comprarCon").addClass(info[1]);
    $("#vista").css({
        display : 'none'
    });
    $("#compraboleto").slideToggle("slow");
}

//Funcion para realizar la confirmacion de compra y  enviar los datos a la base de datos
$("#comprarCon").click(function(event) {

    //Validacion de que el usuario este registrado
    if(idUsu != 0) {

        // Asignacion de variables necesarias para la peticion
        var pago = 1;
        var idSec = this.className;

        //Creacion del mensaje para confirmar la compra del boleto
        swal({
                title: "Estás seguro de comprar el boleto?",
                text: "Al confirmar la compra se cobrará una comicion al pedir una cancelación",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#449D44",
                confirmButtonText: "Si, Comprar",
                cancelButtonText: "No, Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {

                // Validacion para verificar si el usuario acepta compra el boleto
                if (isConfirm) {
                    // Peticion a la api para ingresar la compra del boleto
                    $.getJSON('http://localhost/api/ventas.php?a=setVenta&idUsu=' + idUsu +
                        '&idSec=' + idSec +
                        '&pago=' + pago,
                        function(data){

                            // Obtencion de la respuesta de la api
                            respuesta = data['res'];

                            // Comprobacion de la respuesta de la api, si es 1 muestra mensaje de compra
                            // correcta y en caso de que sea 0 muestra mensaje de error con la respuesta
                            // de la api
                            if(respuesta == "1") {
                                // Mensaje de compra correcta
                                swal("Correcto!", data['msg'], "success");
                            }else{
                                //Aqui regresa msg de error de la api
                                swal({
                                    title: data['msg'],
                                    type: 'error',
                                    confirmButtonText: 'Continuar'
                                });
                            }
                        }
                    );
                } else {
                    swal("Cancelado", "Se canceló su compra", "error");
                }
            });
    }else{
        swal({
            title: "Necesitas estar registrado para poder comprar el boleto",
            type: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
});

$("#comprarCan").click(function(event) {

    $("#vista").toggle("slow");
    $("#compraboleto").css({
        display : 'none'
    });
});
/* FIN VER_EVENTO ----------------------------------------------------------------------------------------------------*/

/* INICIO INFO_USUARIO -----------------------------------------------------------------------------------------------*/
//funcion para verificar si se desea editar informacion de usuario
$("#act_actualizar").click(function(event) {
    $("#info_usuario").css({
        display: 'none'
    });
    $("#form_info_usuario").slideToggle("slow");
});

//funcion para desplegar mensaje de confirmacion de actualizacion de usuario y para guardar la informacion actualizada
$("#act_guardar").click(function(event) {

    // Obtencion de los valores
    var nombre = $('#inp_nombre').val();
    var direccion = $('#inp_direccion').val();
    var telefono = $('#inp_telefono').val();
    var idUsu = $('#inp_idUsu').val();
    var correo = $('#inp_correoUsu').val();

    // Creacion de ventana de confirmacion
    swal({
        title: "¿Seguro que deseas modificar tu informacion?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#449D44",
        confirmButtonText: "Si, Guardar cambios",
        cancelButtonText: "No, Cancelar",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){
        if (isConfirm) {
            // Validacion de los campos
            if(nombre == ''){
                nombre = $('#inp_nombre').attr('placeholder');
            }
            if(direccion == ''){
                if($('#inp_direccion').attr('placeholder') == 'Direccion'){
                    direccion = '';
                }else{
                    direccion = $('#inp_direccion').attr('placeholder');
                }
            }
            if(telefono == ''){
                if($('#inp_telefono').attr('placeholder') == 'Telefono'){
                    telefono = '';
                }else{
                    telefono = $('#inp_telefono').attr('placeholder');
                }
            }
            // Peticion a la api el update del usuario
            $.getJSON('http://localhost/api/login.php?a=updateUsuario&id=' + idUsu +
                '&nom=' + nombre +
                '&cor=' + correo +
                '&dir=' + direccion +
                '&tel=' + telefono,
                function(data) {
                    // Obtencion de la respuesta de la api
                    respuesta = data['res'];

                    // Comprobacion de la respuesta de la api, si es 1 muestra mensaje de compra
                    // correcta y en caso de que sea 0 muestra mensaje de error con la respuesta
                    // de la api
                    if (respuesta == "1") {
                        swal({
                            title: "Correcto",
                            text: 'Redireccionando al inicio...',
                            type: "success",
                            timer: 2000,
                            showConfirmButton: false
                        });
                        $(location).attr("href", "php/actualizarInfoUsuario.php?c=" + data['usuario']['Correo'] + "&p=" + data['usuario']['Contraseña']);
                    } else {
                        //Aqui regresa msg de error de la api
                        swal({
                            title: data['msg'],
                            type: 'error',
                            confirmButtonText: 'Continuar'
                        });
                    }
                }
            );
        }else{
            swal({
                title: "Cancelado",
                type: "error",
                timer: 1000,
                showConfirmButton: false
            });
        }
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


/* FIN INFO_USUARIO -----------------------------------------------------------------------------------------------*/

//funcion para agregar elemtos de nueva zona en agregar evento
//Funcion para cancelar la compra del boleto
$("#agregar_zona").click(function(event) {
    var elemento="<input type='text' class='nombre_zona' placeholder='Nombre de la zona'> <input type='number' class='lugares_zona' placeholder='Cantidad de lugares'> <input type='number' class='precio_zona' placeholder='$ Precio'>";
    $(this).before(elemento);
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