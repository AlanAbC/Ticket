<?php include 'header.php'; ?>
    <div class="small-12 columns" id="contenedor">
        <row>
            <form id="info_usuario">
                <div id="contenedor_img">

                </div>

                <div id="contenedor_info_usuario">
                    <p class="p_info" id="info_nombre">Nombres</p>
                    <p class="p_info" id="info_correo">coreo@vaaqui.com</p>
                    <p class="p_info" id="info_direccion">ubicacion #16</p>
                    <p class="p_info" id="info_telefono">4545123548</p>
                    <button class="act_button" id="act_actualizar">Actualizar</button>
                    <button class="act_button" id="act_aceptar">Aceptar</button>
                </div>

            </form>
        </row>
    </div>
<?php include 'footer.php'; ?>
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
