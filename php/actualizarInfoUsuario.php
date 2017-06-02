<?php
/**
 * Created by PhpStorm.
 * User: theprap
 * Date: 1/06/17
 * Time: 07:43 PM
 */
session_start();

//Validacion de que contenga los parametros necesarios
if(isset($_GET['c'], $_GET['p'])){

    //Asignacion de variables
    $correo = $_GET['c'];
    $contrasena = $_GET['p'];

    //Obtencion del JSON de las respiesta de la api y la convercion del mismo en un array
    $json = file_get_contents('http://localhost/api/login.php?a=infoUsuario&cor='.$correo.'&pas='.$contrasena);
    $objeto = json_decode($json, true);

    //Asignacion de las variables de sesion que se ocuparan
    $_SESSION['id'] = $objeto['usuario']['Id'];
    $_SESSION['nombre'] = $objeto['usuario']['Nombre'];
    $_SESSION['correo'] = $objeto['usuario']['Correo'];
    $_SESSION['contrasena'] = $objeto['usuario']['Contraseña'];
    $_SESSION['tipo'] = $objeto['usuario']['Tipo'];
    $_SESSION['direccion'] = $objeto['usuario']['Direccion'];
    $_SESSION['telefono'] = $objeto['usuario']['Telefono'];

    //Redireccionamiento al index
    header('Location: ../index.php');
}else{
    //Redireccionamiento al index
    header('Location: ../index.php');
}