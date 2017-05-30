<?php
    session_start();
    if(isset($_GET['c'], $_GET['p'])){
        $correo = $_GET['c'];
        $contrasena = $_GET['p'];
        $json = file_get_contents('http://localhost/api/login.php?a=login&cor='.$correo.'&pas='.$contrasena);
        $objeto = json_decode($json, true);
        $_SESSION['id'] = $objeto['usuario']['Id'];
        $_SESSION['nombre'] = $objeto['usuario']['Nombre'];
        $_SESSION['correo'] = $objeto['usuario']['Correo'];
        $_SESSION['contrasena'] = $objeto['usuario']['Contraseña'];
        $_SESSION['tipo'] = $objeto['usuario']['Tipo'];
        $_SESSION['direccion'] = $objeto['usuario']['Direccion'];
        $_SESSION['telefono'] = $objeto['usuario']['Telefono'];
        header('Location: ../index.php');
    }else{
        header('Location: ../index.php');
    }