<?php include 'header.php'; ?>
    <div class="small-12 columns" id="contenedor">
        <row>
            <form id="info_usuario">
                <div id="contenedor_img">
                    <img src="" alt="" class="img_evento">
                    <img src="img/p.png" id="edit_img">
                    <input class="input_form" type="text" id="input_img" placeholder="Ingrese la URL de la imagen" required>
                </div>

                <div id="contenedor_info_usuario">
                    <img src="img/p.png" id="img_edit">
                    <p class="p_info" id="info_nombre">Nombres</p>
                    <img src="img/p.png" id="img_edit">
                    <p class="p_info" id="info_correo">coreo@vaaqui.com</p>
                    <img src="img/p.png" id="img_edit">
                    <p class="p_info" id="info_direccion">ubicacion #16</p>
                    <img src="img/p.png" id="img_edit">
                    <p class="p_info" id="info_telefono">4545123548</p>

                </div>

            </form>
        </row>
    </div>
<?php include 'footer.php'; ?>
<script>
    $("#edit_img").click(function(event) {
        $("#input_img").css('display', 'block');
    });
</script>
