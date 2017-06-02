<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!-- STYLE ZONE -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/foundation.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/swal.css">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.4/sweetalert2.min.css">


    <!-- STYLE ZONE -->

</head>
<div class="small-12 columns" id="header">
    <div class="small-12 columns" id="header-up">
        <h2 id="logo" class="large-4 medium-6 small-6 columns"><a href="index.php" id="logoa">Tickets</a></h2>
        <div class="large-4 columns hide-for-small-only hide-for-medium-only">
            <input type="text" id="buscador" placeholder="Buscar">
            <p id="buscar">Buscar</p>
        </div>
        <div class="large-4 medium-6 small-6 columns">

            <ul class="dropdown menu" data-dropdown-menu id="ulusuario">
                <li>
                    <a href="#" id="user">Usuario</a>
                    <ul class="menu">
                        <li><a href="index.php?c=user&id=<?php print($_SESSION['id']) ?>">Ver eventos comprados</a></li>
                        <li><a href="info_usuario.php">Informacion Usuario</a></li>
                        <li><a href="php/cerrarSesion.php">Cerrar sesion</a></li>
                        <!-- ... -->
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="large-12 columns hide-for-small-only" id="header-down">

        <ul class="menu ">
            <li><a href="index.php?c=concierto">Conciertos</a></li>
            <li><a href="index.php?c=teatro">Teatro</a></li>
            <li><a href="index.php?c=deporte">Deportes</a></li>
            <li><a href="index.php?c=cultural">Culturales</a></li>
        </ul>
    </div>

</div>
<body>

