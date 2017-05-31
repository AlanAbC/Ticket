<?php session_start(); //session_destroy();?>

<?php
    if(isset($_SESSION['tipo'])){
        if($_SESSION['tipo'] == "u"){
            include 'header_user.php';
        }else if($_SESSION['tipo'] == "a") {
            include 'header.php';
        }else {
            header('Location: ../index.php');
        }
    }else{
        header('Location: ../index.php');
    }
?>

    <div class="small-12 columns" id="contenedor">
        <row>
            <form id="info_usuario">
                <div id="contenedor_img">

                </div>

                <div id="contenedor_info_usuario">
                    <p class="p_info" id="info_nombres"><?php print($_SESSION['nombre']); ?></p>
                    <p class="p_info" id="info_correo"><?php print($_SESSION['correo']); ?></p>
                    <p class="p_info" id="info_direccion"><?php print($_SESSION['direccion']); ?></p>
                    <p class="p_info" id="info_telefono"><?php print($_SESSION['telefono']); ?></p>
                    <button class="act_button" id="act_actualizar">Actualizar</button>
                    <button class="act_button" id="act_aceptar">Aceptar</button>
                </div>

            </form>
        </row>
    </div>
<script>
        $("#act_actualizar").click(function(event) {
            $("#act_aceptar").css('display', 'block');
            $("#act_actualizar").css('display', 'none');
        });
        $("#act_aceptar").click(function(event) {
            $("#act_aceptar").css('display', 'none');
            $("#act_actualizar").css('display', 'block');
        });
</script>

<?php include 'footer.php'; ?>
