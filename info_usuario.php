<?php include 'header.php'; ?>
    <div class="small-12 columns" id="contenedor">
        <row>
            <form id="info_usuario">
                <div id="contenedor_img">
                    <img src="" alt="" class="img_evento">
                    <img src="img/s.png" id="edit_img2">
                    <img src="img/p.png" id="edit_img">
                    <input class="input_form" type="text" id="input_img" placeholder="Ingrese la URL de la imagen" required>
                </div>

                <div id="contenedor_info_usuario">
                    <img src="img/p.png" id="img_1">
                    <img src="img/s.png" id="img_11">
                    <p class="p_info" id="info_nombre">Nombres</p>
                    <img src="img/p.png" id="img_2">
                    <img src="img/s.png" id="img_21">
                    <p class="p_info" id="info_correo">coreo@vaaqui.com</p>
                    <img src="img/p.png" id="img_3">
                    <img src="img/s.png" id="img_31">
                    <p class="p_info" id="info_direccion">ubicacion #16</p>
                    <img src="img/p.png" id="img_4">
                    <img src="img/s.png" id="img_41">
                    <p class="p_info" id="info_telefono">4545123548</p>

                </div>

            </form>
        </row>
    </div>
<?php include 'footer.php'; ?>
<script>
    $("#edit_img").click(function(event) {
        $("#input_img").css('display', 'block');
        $("#edit_img2").css('display', 'block');
        $("edit_img").css('display','none');
    });

     $("#edit_img2").click(function(event) {
        $("#input_img").css('display', 'none');
        $("#edit_img2").css('display', 'none');
        $("#edit_img").css('display','block');
    });

      $("#img_1").click(function(event) {
        $("#img_11").css('display', 'block');
        $("#img_1").css('display','none');
    });

     $("#img_11").click(function(event) {
        $("#img_11").css('display', 'none');
        $("#img_1").css('display','block');
    });

    $("#img_2").click(function(event) {
        $("#img_21").css('display', 'block');
        $("#img_2").css('display','none');
    });

     $("#img_21").click(function(event) {
        $("#img_21").css('display', 'none');
        $("#img_2").css('display','block');
    });

      $("#img_3").click(function(event) {
        $("#img_31").css('display', 'block');
        $("#img_3").css('display','none');
    });

     $("#img_31").click(function(event) {
        $("#img_31").css('display', 'none');
        $("#img_3").css('display','block');
    });

      $("#img_4").click(function(event) {
        $("#img_41").css('display', 'block');
        $("#img_4").css('display','none');
    });

     $("#img_41").click(function(event) {
        $("#img_41").css('display', 'none');
        $("#img_4").css('display','block');
    });
</script>
