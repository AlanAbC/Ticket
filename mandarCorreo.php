<?php 

	if(isset($_POST['cor'], $_POST['nom'], $_POST['asu'], $_POST['msg'])){
		$str_correo = $_POST['cor'];
		$str_nombre = $_POST['nom'];
		$str_ausnto = $_POST['asu'];
		$str_mensaje = $_POST['msg'];

		$mensaje= '<html>
				<head>
				<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
				<title>Contacto Clares TI</title>
				<style type="text/css">
				<!--
				.Estilo2 {font-family: Arial, Helvetica, sans-serif; font-size: 12px; }
				-->
				</style>
				</head>
				
				<body>
				<p align="justify" class="Estilo2">Ha recibido un mensaje de contacto:</p>
				<p align="justify" class="Estilo2">Asunto: '.$str_asunto.'</p>
				<p align="justify" class="Estilo2">Nombre: '.$str_nombre.'</p>
				<p align="justify" class="Estilo2">Correo: '.$str_correo.'</p>
				<p align="justify" class="Estilo2">Mensaje: '.$str_mensaje.'</p>
				</body>
				</html>'; //Cuerpo del mensaje
		$asunto = 'contacto de pagina web ('.$asunto.')';
		//Cabeceras del correo
		$cabeceras = 'From: CONTACTO - WEB' . "\r\n" .
			 'Content-type: text/html' . "\r\n";
			 'Reply-To: '. $str_correo . "\r\n"; //
		
		if(mail('clarestiqro@gmail.com',$asunto,$mensaje,$cabeceras)){
			echo 1;
		}else{
			echo 2;
		}
	}

?>