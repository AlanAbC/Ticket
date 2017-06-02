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
            <div id="info_usuario">
                <div id="contenedor_info_usuario">
                    <p class="p_info" id="info_nombres"><?php print($_SESSION['nombre']); ?></p>
                    <p class="p_info" id="info_correo"><?php print($_SESSION['correo']); ?></p>
                    <p class="p_info" id="info_direccion"><?php print ($_SESSION['direccion'] != '') ? $_SESSION['direccion']: 'Direccion' ?></p>
                    <p class="p_info" id="info_telefono"><?php print($_SESSION['telefono'] != '') ? $_SESSION['telefono'] : 'Telefono'?></p>
                    <p class="act_button" id="act_actualizar">Actualizar</p>
                </div>

            </div>
            <form action="" id="form_info_usuario">
                <input id="inp_nombre" type="text" class="input_info" placeholder="<?php print($_SESSION['nombre'])?>">
                <input id="inp_direccion" type="text" class="input_info" placeholder="<?php print ($_SESSION['direccion'] != '') ? $_SESSION['direccion']: 'Direccion' ?>">
                <input id="inp_telefono" type="text" class="input_info" placeholder="<?php print($_SESSION['telefono'] != '') ? $_SESSION['telefono'] : 'Telefono'?>">
                <input type="hidden" id="inp_idUsu" value="<?php print($_SESSION['id']); ?>">
                <input type="hidden" id="inp_correoUsu" value="<?php print($_SESSION['correo']); ?>">
                <p class="act_button" id="act_guardar">Guardar</p>
                <p class="act_button" id="act_eliminar">Eliminar usuario</p>
                <p class="act_button" id="act_cancelar">Cancelar</p>
            
            </form>
        </row>
    </div>

<?php include 'footer.php'; ?>
