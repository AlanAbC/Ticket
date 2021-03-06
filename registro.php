<?php session_start(); //session_destroy();?>

<?php
    if(isset($_SESSION['tipo'])){
        if($_SESSION['tipo'] == "u"){
            header('Location: ../index.php');
        }else if($_SESSION['tipo'] == "a") {
            header('Location: ../index.php');
        }else {

        }
    }else{

    }
?>

<html>
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="css/style_registro.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.4/sweetalert2.min.css">
	</head>
	<body style="background-image: url('img/login.jpg');">
	<div class="small-12 columns" id="mascara">
		<row>
			<div id="contenedor">
				<p id="titulo">Registro</p>
				<p id="usuario">*Nombre</p>
				<input type="text"  id="input_usuario" required>
				<p id="correo">*Correo</p>
				<input type="email"  id="input_correo" required>
				<p id="direccion">Direccion</p>
				<input type="text"  id="input_direccion">
				<p id="telefono">Telefono</p>
				<input type="text"  id="input_telefono">
				<p id="password">*Contraseña</p>
				<input type="password"  id="input_password" required>
				<p id="conpassword">*Repetir Contraseña</p>
				<input type="password"  id="input_conpassword" required>
				<p id="registro">Registrarse</p>
			</div>
		</row>
	</div>
    <script src="js/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.4/sweetalert2.min.js"></script>
    <script src="js/registro.js"></script>
	</body>
</html>