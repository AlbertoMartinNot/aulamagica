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
  });

 }]);

magia.controller('cursos', function($scope){

  $scope.mostrar=function(curso){
    
    $scope.cartas=false;
    $scope.monedas=false;
    $scope.cuerda=false;
    $scope[curso]=true;
  }


});