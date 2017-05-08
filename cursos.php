<?php
  session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width initial-scale=1.0">
	<title>Cursos</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="mayia.css">
</head>
<body>
<div class="nave collapse navbar-collapse" id="top bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="mayia.html"><span class="glyphicon glyphicon-home"></span>&nbsp;Inicio <span class="sr-only">(current)</span></a></li>
        <li><a href="cursos.html"><span class="glyphicon glyphicon-education"></span>&nbsp;Cursos</a></li>
        <li><a href="perfil-kun.html"><span class="glyphicon glyphicon-user"></span>&nbsp;Perfil</a></li>
        <li><p class="navbar-text">Sesion Iniciada como:<?php echo $_SESSION['sesUsu']; ?>  <span></span></p></li>
        
      </ul>
      
      <ul id="topdr" class="nav navbar-nav navbar-right">
        <li><a href="Foro.html"><span class="glyphicon glyphicon-comment"></span>&nbsp;Foro</a></li>
        
        <li><a href="sesion.php">Cerrar Sesion&nbsp;<span class="glyphicon glyphicon-remove"></span></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div id="jumbo" class="jumbotron"><h1>コース</h1></div>

<div id="side" class="row">

  <div class="sidebar col-xs-8 col-sm-6 col-md-4 col-lg-2">
    <ul class="sidebar-nav">
      <div class="dropdown">
        <li class="sub " ><button class="bot btn dropdown-toggle" data-toggle="dropdown">Cartas</button>
        </li>
        </div>
        <div class="dropdown">
        <li class="sub"><button class="bot btn dropdown-toggle" data-toggle="dropdown">Monedas</button>
        </li>
        </div>
    </ul>

  </div>

</div>

<nav class="navbot navbar navbar-default navbar-fixed-bottom">
  <div class="botm container-fluid">
  <ul class="navbar-left list-inline"><li><p id="pi" class="navbar-text">Cursos de Magia</p></li></ul>
  <ul id="dch" class=" navbar-nav navbar-right list-inline"><li><p id="rede" class="navbar-text">Redes Sociales:</p>&nbsp;</li><li><a href="https://es-es.facebook.com"><img class="soci" src="facebook.png" role="button" ></a></li><li><a href="https://twitter.com/?lang=es"><img class="soci" src="gorjeo.png"></a></li>
  </ul>
  </div>
</nav>

<script src="jquery-3.1.1.js"></script>
<script src="js/bootstrap.js"></script>

</body>
</html>