var app = angular.module('gitGradApp.estudianteCtrl', []);

// controlador clientes
app.controller('estudianteCtrl', ['$scope','$window','loginServices', function($scope,$window,loginServices){
	
    $scope.estudiante = "estudiante";

}]) 