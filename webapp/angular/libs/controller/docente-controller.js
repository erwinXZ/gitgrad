var app = angular.module('gitGradApp.docenteCtrl', ["ngStorage"]);

// controlador clientes
app.controller('docenteCtrl', ['$scope','$window','docenteServices','$sessionStorage', function($scope,$window,docenteServices,$sessionStorage){
	 $scope.docente = $sessionStorage.data;

     $scope.listarProyectos = function(id){
        docenteServices.listarProyectos(id).then(function(){
            console.log(docenteServices.response.message);
            $scope.proyectos = docenteServices.response.message;
         });        
     }

     $scope.listarProyectos($scope.docente.id);

     $scope.irProyecto = function(proyecto){

        console.log(proyecto);
        $sessionStorage.dataProyect = proyecto;
        $window.location.href = '#/docente/revision';
     
    }
}]) 