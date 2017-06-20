var app = angular.module('gitGradApp.revisionCtrl', ["ngStorage"]);

// controlador clientes
app.controller('revisionCtrl', ['$scope','$window','revisionServices','$sessionStorage', function($scope,$window,revisionServices,$sessionStorage){
	
    $scope.revision = "Revision";
    $scope.proyecto = $sessionStorage.dataProyect ;
    $scope.listarDocumentos = function(id){
        revisionServices.listarDocumentos(id).then(function(){
            console.log(revisionServices.response.message);
            $scope.documentos = revisionServices.response.message;  
        });
    }
    
    $scope.listarDocumentos($scope.proyecto.id);

    $scope.verDocumento = function (documento){
        console.log(documento);
        $sessionStorage.dataDocument = documento;
        $scope.listarDocumentos = function(id){
        revisionServices.revisar(documento.id).then(function(){
            console.log(revisionServices.response.message);
            $scope.documentos = revisionServices.response.message;  
          //  $window.location.href = 'http://192.168.1.7/gitgrad/webapp/pdfjs/web/viewer.html';
        });
    }
        
       


    }

}]) 