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
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
		<div class="small-12 medium-4 large-2 end columns evento">
			<p class="titulo_evento">Titulo</p>
		</div>
	</row>
</div>
<?php include 'footer.php'; ?>