var app = angular.module('gitGradApp.revisionCtrl', ["ngStorage"]);

// controlador clientes
app.controller('revisionCtrl', ['$scope','$window','loginServices','$sessionStorage', function($scope,$window,loginServices,$sessionStorage){
	
    $scope.revision = "Revision";
    $scope.proyecto = $sessionStorage.dataProyect ;

}]) 