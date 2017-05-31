<?php session_start(); //session_destroy();?>

<?php
    if(isset($_SESSION['tipo'])){
        if($_SESSION['tipo'] == "u"){
            include 'header_user.php';
        }else if($_SESSION['tipo'] == "a") {
            include 'header.php';
        }else {
            include 'header_main.php';
        }
    }else{
        include 'header_main.php';
    }
?>

<div class="small-12 columns" id="contenedor">
	<row>
		<form id="form">
			<div id="contenedor_img">
				<img src="" alt="" class="img_evento">
                <input class="input_form" type="text" id="form_img" placeholder="Ingrese la URL de la imagen" required>
			</div>

            <div id="contenedor_formulario">

                <input class="input_form" type="text" id="form_nombre" placeholder="Nombre" required>
                <input class="input_form" type="text" id="form_estado" placeholder="Estado" required>
                <input class="input_form" type="text" id="form_ciudad" placeholder="Ciudad" required>
                <input class="input_form" type="text" id="form_dir" placeholder="Direccion" required>
                <input class="input_form" type="text" id="form_lugar" placeholder="Lugar" required>
                <input class="input_form" type="date" id="form_fecha" placeholder="Fecha" required>
                <input class="input_form" type="time" id="form_hora" placeholder="Hora" required>
                <select class="input_form" id="form_cat"  required>
                    <option value="0">Categoria</option>
                    <option value="1">Musica</option>
                    <option value="2">Teatro</option>
                    <option value="3">Comedia</option>
                    <option value="4">Actuacion</option>
                    <option value="5">Magia</option>
                </select>
                <textarea name="descripcion" id="form_desc" cols="30" rows="5" placeholder="Descripción" required></textarea>
                <input class="button_form" type="submit" id="btn_cancelar" value="Cancelar">
                <input class="button_form" type="submit" id="btn_craer" value="Crear">

            </div>
			
		</form>
	</row>
</div>
<?php include 'footer.php'; ?>