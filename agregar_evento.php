<?php session_start(); //session_destroy();?>

<?php
    if(isset($_SESSION['tipo'])){
        if($_SESSION['tipo'] == "u"){
            header('Location: Prohibido.php');
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
		<div id="form">
			<div id="contenedor_img">
				<img src="" alt="" class="img_evento" id="img_mostrar">
                <input class="input_form" type="text" id="form_img" placeholder="*Ingrese la URL de la imagen incluyendo http://" required>
			</div>

            <div id="contenedor_formulario">

                <input class="input_form" type="text" id="form_nombre" placeholder="*Nombre" required>
                <input class="input_form" type="text" id="form_estado" placeholder="*Estado" required>
                <input class="input_form" type="text" id="form_ciudad" placeholder="*Ciudad" required>
                <input class="input_form" type="text" id="form_dir" placeholder="*Direccion" required>
                <input class="input_form" type="text" id="form_lugar" placeholder="*Lugar" required>
                <input class="input_form" type="date" id="form_fecha" placeholder="*Fecha" required>
                <input class="input_form" type="time" id="form_hora" placeholder="*Hora" required>
                <select class="input_form" id="form_cat"  required>
                    <option value="0">*Categoria</option>
                    <?php
                    //Obtencion del JSON de las respiesta de la api y la convercion del mismo en un array
                    $json = file_get_contents('http://localhost/api/categorias.php?a=getCategorias');
                    $objeto = json_decode($json, true);
                    foreach($objeto['categorias'] as $categoria){
                        print('<option value="'.$categoria['id'].'">'.$categoria['nombre'].'</option>');
                    }
                    ?>
                    <!--
                    <option value="1">Musica</option>
                    <option value="2">Teatro</option>
                    <option value="3">Comedia</option>
                    <option value="4">Actuacion</option>
                    <option value="5">Magia</option>
                    -->
                </select>
                <textarea name="descripcion" id="form_desc" cols="30" rows="5" placeholder="*Descripción" required></textarea>
               

            </div>
            <div id="contenedor_zonas">
                <h3 id="titZonas">Definicion de Zonas</h3>
                <p id="agregar_zona">Agregar Zona</p>
                <p class="button_form" id="btn_cancelar">Cancelar</p>
                <p class="button_form" id="btn_crear" onclick="crearEvento()">Crear</p>
            </div>
			
		</div>
	</row>
</div>
<?php include 'footer.php'; ?>