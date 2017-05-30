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

    }
});