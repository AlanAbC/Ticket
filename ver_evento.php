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

    <div class="small-12 columns" id="contenedorInfo">
        <row>
            <div id="vista">
                <div id="contenedor_img_vista">
                    <img src="" alt="" id="img_evento_vista">
                    <h3 id="titulo_evento_vista">Titulo del evento</h3>
                    <p id="descripcion_evento_vista">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo blanditiis enim tenetur, totam, debitis alias id eaque fugiat amet placeat modi magni ut dolor vitae. Dolorum saepe voluptatum sint aliquam.</p>
                </div>
                <div id="contenedor_ubicacion">
                    <p id="informacion">Informacion</p>
                    <div id="infotit">
                        <p id="infon"><b>Categoria:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>
                    <div id="infotit">
                        <p id="infon"><b>Lugar:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>
                    <div id="infotit">
                        <p id="infon"><b>Fecha:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>
                    <div id="infotit">
                        <p id="infon"><b>Hora:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>
                    <div id="infotit">
                        <p id="infon"><b>Estado:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>
                    <div id="infotit">
                        <p id="infon"><b>Ciudad:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>
                    <div id="infotit">
                        <p id="infon"><b>Direccion:</b></p>
                        <p id="info">Aqui va el #</p>
                    </div>

                </div>
                <div id="contenedor_precio">
                    <p id="precios">Precios</p>
                    <div id="preciostit">
                        <p id="precion"><b>Zona A</b></p>
                        <p class="comprar" id="comprarA">Comprar Boletos</p>
                        <p id="precio">Aqui va el #</p>

                    </div>
                    <div id="preciostit">
                        <p id="precion"><b>Zona B</b></p>
                        <p class="comprar" id="comprarB">Comprar Boletos</p>
                        <p id="precio">Aqui va el #</p>

                    </div>
                    <div id="preciostit">
                        <p id="precion"><b>Zona C</b></p>
                        <p class="comprar" id="comprarC">Comprar Boletos</p>
                        <p id="precio">Aqui va el #</p>

                    </div>
                    <div id="preciostit">
                        <p id="precion"><b>Zona C</b></p>
                        <p class="comprar" id="comprarC">Comprar Boletos</p>
                        <p id="precio">Aqui va el #</p>

                    </div>
                    <div id="preciostit">
                        <p id="precion"><b>Zona C</b></p>
                        <p class="comprar" id="comprarC">Comprar Boletos</p>
                        <p id="precio">Aqui va el #</p>

                    </div>

                </div>

            </div>
            <div id="compraboleto">
                <div id="contenedor_img_vista">
                    <img src="" alt="" id="img_evento_vista">
                    <h3 id="titulo_evento_vista">Titulo del evento</h3>
                    <p id="descripcion_evento_vista">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo blanditiis enim tenetur, totam, debitis alias id eaque fugiat amet placeat modi magni ut dolor vitae. Dolorum saepe voluptatum sint aliquam.</p>
                </div>
                <div id="contenedor_compra">
                    <h3 id="categoria">Categoria</h3>
                    <p id="comprarCon">Comprar</p>
                    <p id="comprarCan">Cancelar</p>
                </div>

            </div>
        </row>
    </div>
<?php include 'footer.php'; ?>