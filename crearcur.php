<?php
	$c=mysqli_connect("localhost","root","","test");

	$sq="SELECT id_cur FROM cursos";
	$res=mysqli_query($c,$sq);
	$si=true;
	while($reg=mysqli_fetch_assoc($res)){
		if($reg['id_cur']==$_POST['datecur']){
			echo "esta fecha ya ha sido seleccionada";
			$si=false;
		}
	}

	if($si==true){
		$sql="INSERT INTO cursos (id_cur,nom_cur,nivel,material) VALUES (?,?,?,?)";
		$res=mysqli_prepare($c,$sql);
		$ok=mysqli_stmt_bind_param($res,"ssss",$_POST['datecur'],$_POST['nomcur'],($_POST['nivel']),$_POST['mtr']);
		$ok=mysqli_stmt_execute($res);

		header("Location:mayia.html;");
	}
?>