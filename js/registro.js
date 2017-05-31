/**
 * Created by theprap on 30/05/17.
 */
$('#registro').click(function(){

    //Asignacion de variables
    var nombre = $("#input_usuario").val();
    var correo = $('#input_correo').val();
    var direccion = $('#input_direccion').val();
    var telefono = $('#input_telefono').val();
    var pass1 = $('#input_password').val();
    var pass2 = $('#input_conpassword').val();
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Validaciones de que los campos nbo esten vacios y el correo y telefono sea un formato correcto
    if(nombre == ""){
        swal({
            title: 'Falta ingresar un usuario',
            type: 'warning',
            confirmButtonText: 'Continuar'
        });
    }else if(!regex.test(correo.trim())){
        swal({
            title: 'El formato del correo es incorrecto',
            type: 'warning',
            confirmButtonText: 'Continuar'
        });
    }else if(pass1 == ""){
        swal({
            title: 'Falta ingresar una contraseña',
            type: 'warning',
            confirmButtonText: 'Continuar'
        });
    }else if(pass1 != pass2){
        swal({
            title: 'Las contarseñas no coinciden',
            type: 'warning',
            confirmButtonText: 'Continuar'
        });
    }else{

        // Conexion con la api para validar que exista el usuario ongresado
        $.getJSON("http://localhost/api/login.php?a=setUsuario&nom=" + nombre +
            "&cor=" + correo +
            "&pas=" + pass1 +
            "&tip=u&dir=" + direccion +
            "&tel=" + telefono +
            "",
            function(data){

                // Obtencion de la respuesta de la api
                var respuesta = data['res'];

                // Comprobacion del resultado, en caso de que sea 1 redirecciona a otra paguina donde
                // se creara la sesion de usuario y redireccionara al index, en caso de que sea 0
                // muestra mensaje en pantalla de las respuesta de la api
                if(respuesta == "1"){
                    // Mensaje de que se registro correctamente el usuario
                    swal({
                        title: "Se agrego correctamente el usuario",
                        text: "redireccionando..",
                        type: "success",
                        timer: 4000,
                        showConfirmButton: false
                    });
                    // Aqui va la redireccion hacia el index con los parametros del usuario para crear la session
                    $(location).attr("href", "php/login.php?c=" + correo + "&p=" + pass1);
                }else{
                    // Aqui regresa msg en caso de que haya ocurrido un error al insertar el usuario
                    swal({
                        title: data['msg'],
                        type: 'error',
                        confirmButtonText: 'Continuar'
                    });
                }
            }
        );
    }
});