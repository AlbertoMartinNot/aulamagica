<?php
	$c=mysqli_connect("localhost","root","","test");

	$sq="SELECT nombre, ID_usu FROM personas";

	$res=mysqli_query($c,$sq);
	$si=true;
	while($reg=mysqli_fetch_assoc($res)){
		if($reg['nombre']==$_POST['usu']){
			echo "El nombre de usuario ya existe";
			$si=false;

		}else if($reg['ID_usu']==$_POST['dni']){
			echo "El dni está repetido";
			$si=false;
		}
	}

	if($si==true){

	$sql="INSERT INTO personas (ID_usu,nombre,pass,email) VALUES (?,?,?,?)";
	$res=mysqli_prepare($c,$sql);
	$ok=mysqli_stmt_bind_param($res,"ssss",$_POST['dni'],$_POST['usu'],MD5($_POST['psw']),$_POST['correo']);
	$ok=mysqli_stmt_execute($res);

	header("location:mayia.html");
	}

?>