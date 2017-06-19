var app = angular.module('gitGradApp.revisionCtrl', ["ngStorage"]);

// controlador clientes
app.controller('revisionCtrl', ['$scope','$window','revisionServices','$sessionStorage', function($scope,$window,loginServices,$sessionStorage){
	
    $scope.revision = "Revision";
    $scope.proyecto = $sessionStorage.dataProyect ;
    $scope.listarDocumentos = function(id){
        revisionServices.listarDocumentos(id).then(function(){
            console.log(revisionServices.response.message);
        });
    }

    $scope.listarDocumentos($scope.proyecto.id);

}]) 