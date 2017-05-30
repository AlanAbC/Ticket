$("#login").click(function(){
    var correo = $("#input_usuario").val();
    var contrasena = $("#input_password").val();
    $.getJSON( "http://localhost/api/login.php?a=login&cor=" + correo + "&pas=" + contrasena, function( data ) {
        var respuesta = data['res'];
        if(respuesta === "1"){
            var items = [];
            $.each( data['usuario'], function( key, val ) {
                items.push( key + ": " + val);
            });
            //Aqui va la redireccion hacia el index con los parametrso del usuario para crear la session
            alert(items);
            console.log(items);
        }else{
            //Aqui rgresa msg de usuario o contraseña incorrectos o de algun error
            alert(data['msg']);
        }
    });
});