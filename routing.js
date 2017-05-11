var magia=angular.module("magia", ['ngRoute']);

magia.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "home.html"
  })
  .when("/contacto", {
      templateUrl : "contacto.html"

  }).when("/registrar", {
      templateUrl : "registro.html"
  })
  .when("/perfil", {
      templateUrl : "perfil-kun.html"
  })
  .when("/cursos", {
      templateUrl : "cursossinregistro.html"
  })
  .when("/config", {
      templateUrl : "config.html"
  })
  .when("/foro", {
      templateUrl : "Foro.html"
  })
   .when("/contraseña", {
      templateUrl : "contraseña.html"
  })
      .when("/login", {
      templateUrl : "iniciarsesion.html"
  })
  .when("/info", {
      templateUrl : "infocursos.html"
  });

 }]);

magia.controller('cursos', function($scope){
    $scope.inicio=true;
  $scope.mostrar=function(curso){
    $scope.inicio=false;
    $scope.cartas="";
    $scope.monedas="";
    $scope.cuerda="";
    $scope[curso]="active";
  }


});