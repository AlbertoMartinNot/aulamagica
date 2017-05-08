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
      templateUrl : "cursos.html"
  })
  .when("/config", {
      templateUrl : "config.html"
  })
  .when("/foro", {
      templateUrl : "foro.html"
  });

 }]);