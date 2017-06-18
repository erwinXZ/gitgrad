var app = angular.module('gitGradApp',['ngRoute',
	'gitGradApp.loginCtrl',
	'gitGradApp.docenteCtrl',
	'gitGradApp.estudianteCtrl',
	'gitGradApp.loginServices',
	'gitGradApp.registroCtrl',
	'gitGradApp.registroServices',
	'gitGradApp.docenteServices'
]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

}]);

 app.config( function ($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'pages/login.html',
		controller: 'loginCtrl'
	})
	.when('/registro', {
		templateUrl: 'pages/registro.html',
		controller: 'registroCtrl'
	})
	.when('/docente', {
		templateUrl: 'pages/docente/docente.html',
		controller: 'docenteCtrl'
	})
	.when('/docente/proyectos', {
		templateUrl: 'pages/docente/proyectos.html',
		controller: 'docenteCtrl'
	})
	.when('/estudiante', {
		templateUrl: 'pages/estudiante/estudiante.html',
		controller: 'estudianteCtrl'
	})

});

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);