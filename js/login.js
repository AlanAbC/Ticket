$("#login").click(function(){

    // Asignacion de variables
    var correo = $("#input_usuario").val();
    var contrasena = $("#input_password").val();

    // Validaciones del correo y contraseña no sean vacios
    if(correo == ""){
        swal({
            title: 'Falta ingresar un correo',
            type: 'warning',
            confirmButtonText: 'Continuar'
        });
    }else if(contrasena == ""){
        swal({
            title: 'Falta ingresar una contraseña',
            type: 'warning',
            confirmButtonText: 'Continuar'
        });
    }else {

        // Conexion con la api para validar que exista el usuario ingresado
        $.getJSON("http://localhost/api/login.php?a=login&cor=" + correo + "&pas=" + contrasena, function (data) {

            // Obtencion de la respuesta de la api
            var respuesta = data['res'];

            // Comprobacion del resultado, en caso de que sea 1 redirecciona a otra paguina donde
            // se creara la sesion de usuario y redireccionara al index, en caso de que sea 0
            // muestra mensaje en pantalla de las respuesta de la api
            if (respuesta === "1") {
                //Aqui va la redireccion hacia el index con los parametros del usuario para crear la session
                $(location).attr("href", "php/login.php?c=" + correo + "&p=" + contrasena);
            } else if (respuesta === "0") {
                //Aqui regresa msg de usuario o contraseña incorrectos o de algun error
                swal({
                    title: data['msg'],
                    type: 'error',
                    confirmButtonText: 'Continuar'
                });
            }
        });
    }
});


