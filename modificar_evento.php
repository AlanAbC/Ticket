<?php include 'header.php'; ?>
    <div class="small-12 columns" id="contenedor">
        <row>
            <form id="form">
                <div id="contenedor_img">
                    <img src="" alt="" class="img_evento">
                    <input class="input_form" type="text" id="form_img" placeholder="Ingrese la nueva URL de la imagen" required>
                </div>

                <div id="contenedor_formulario">

                    <input class="input_form" type="text" id="form_nombre" placeholder="Nombre">
                    <input class="input_form" type="text" id="form_estado" placeholder="Estado">
                    <input class="input_form" type="text" id="form_ciudad" placeholder="Ciudad">
                    <input class="input_form" type="text" id="form_dir" placeholder="Direccion">
                    <input class="input_form" type="text" id="form_lugar" placeholder="Lugar">
                    <input class="input_form" type="date" id="form_fecha" placeholder="Fecha">
                    <input class="input_form" type="time" id="form_hora" placeholder="Hora">
                    <select class="input_form" id="form_cat"  >
                        <option value="0">Categoria</option>
                        <option value="1">Musica</option>
                        <option value="2">Teatro</option>
                        <option value="3">Comedia</option>
                        <option value="4">Actuacion</option>
                        <option value="5">Magiar/option>
                    </select>
                    <textarea name="descripcion" id="form_desc" cols="30" rows="5" placeholder="Descripción"></textarea>
                    <input class="button_form" type="submit" id="btn_cancelar" value="Cancelar">
                    <input class="button_form" type="submit" id="btn_guardar" value="Guardar">
                </div>

            </form>
        </row>
    </div>
<?php include 'footer.php'; ?>