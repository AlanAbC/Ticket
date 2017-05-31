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
        <h2 id="logo" class="small-4 columns"><a href="index.php" id="logoa">Tickets</a></h2>
        <div class="small-4 columns">
            <input type="text" id="buscador" placeholder="Buscar">
            <p id="buscar">Buscar</p>
        </div>
        <div class="small-4 columns">
            <p id="iniciar"><a href="login.php">Iniciar Sesion <?php //print($_SESSION['correo']); ?></a></p>
        </div>
    </div>
    <div class="small-12 columns" id="header-down">

        <div class="large-12 columns hide-for-medium-only hide-for-small-only"></div>
        <ul class="menu ">
            <li><a href="index.php?c=concierto">Conciertos</a></li>
            <li><a href="index.php?c=teatro">Teatro</a></li>
            <li><a href="index.php?c=deporte">Deportes</a></li>
            <li><a href="index.php?c=cultural">Culturales</a></li>
        </ul>
    </div>

</div>
<body>

