var app = angular.module('gitGradApp.transferirCtrl', ["ngStorage"]);

// controlador clientes
app.controller('transferirCtrl', ['$scope','$window','$sessionStorage', function($scope,$window,$sessionStorage){
	
    $scope.proyecto = $sessionStorage.dataProyect ;
    $scope.transferir = " TRANSFERIR ";

    $scope.transferir = function(email){
        console.log(email);
    }

}]) 