var app = angular.module('gitGradApp.estudianteCtrl', ["ngStorage"]);

// controlador clientes
app.controller('estudianteCtrl', ['$scope','$window','loginServices','$sessionStorage', function($scope,$window,loginServices,$sessionStorage){
	
    $scope.user = $sessionStorage.data;

}]) 