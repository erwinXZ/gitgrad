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
<<<<<<< HEAD
        $window.location.href = 'http://192.168.1.6/gitgrad/webapp/pdfjs/web/viewer.html';
=======
        revisionServices.revisar(documento.id).then(function(){
            console.log(revisionServices.response.message);
            $scope.documentos = revisionServices.response.message;  
           $window.location.href = 'http://localhost/gitgrad/webapp/pdfjs/web/viewer.html';
        });

    
        
       


>>>>>>> 9e03aa731f89590444fcdd157c10ff0901da1620
    }

}]) 