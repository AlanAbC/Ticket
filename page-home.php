<?php get_header(); ?>

<div id="cont-img" style="background-image: url('<?php res(); ?>/img/logo.jpg'); ">
    <h1 id="slogan">Slogan goes here</h1>
    <div id="conocenos"><a href="#acerca">Conocenos</a></div>
</div>
<row>
<div class="small-12 columns" id="acerca">
	<div class="small-12 columns"><h2>¿Que es CLARES TI?</h2></div>
	<div class="small-12  columns" id="cont"><p>Somos un grupo talentoso de jóvenes que trabajo duro por desarrollar soluciones tecnológicas a algunos de los problemas mas comunes que enfrenta nuestra sociedad. Tratamos de encontrar soluciones a los problemas, uno por uno</p></div>
</div>
<div class="parallax" style="background-image:url('<?php res(); ?>/img/logo.jpg')" ></div>
<div class="small-12  end columns" id="nuestros">
	<div class="medium-11 medium-push-1 small-12 columns">
		<h3>Nuestros Proyectos</h3>
		<div class="small-12 columns" id="proyectos">
			<a href="http://tt.claresti.com/"><div id="img-thief" class="large-2 medium-3 small-7 columns"><img src="<?php res(); ?>/img/thief-icon.png" alt=""></div></a>
			<a href="http://claresti.com"><div id="img-tareas" class="large-2 medium-3 small-7 columns"><img src="<?php res(); ?>/img/tareas-icon.png" alt=""></div></a>
			<a href="http://www.tusfinanzas.claresti.com/Sitio/"><div id="img-finanzas" class="large-2 medium-3 small-7 columns"><img src="<?php res(); ?>/img/finance-icon.png" alt=""></div></a>
			<a href="http://claresti.com"><div id="img-gas" class="large-2 medium-3 small-7 end columns"><img src="<?php res(); ?>/img/gas-icon.png" alt=""></div></a>
			<a href="http://hackaton.claresti.com/"><div id="img-obras" class="large-2 medium-3 small-7 end columns"><img src="<?php res(); ?>/img/obras-icon.png" alt=""></div></a>
		
		</div>
	</div>
</div>
<div class="parallax" style="background-image:url('<?php res(); ?>/img/logo.jpg')" ></div>
<div class="small-12 columns" id="contacto">
	<h3 style="text-align: center;">Contactanos</h3>
		<form action="<?php res(); ?>/mandarCorreo.php" method="POST">
			<input id="input-correo" type="text" name="cor" placeholder="Correo">
			<input id="input-nombre" type="text" name="nom" placeholder="Nombre">
			<input id="input-asunto" type="text" name="asu" placeholder="Asunto">
			<input id="input-mensaje" type="text" name="msg" placeholder="Deje su mensaje">
			<input id="input-enviar" type="submit" >
		</form>
		
</div>

</row>	

<?php get_footer(); ?>
