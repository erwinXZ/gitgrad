var app = angular.module('gitGradApp.docenteCtrl', ["ngStorage"]);

// controlador clientes
app.controller('docenteCtrl', ['$scope','$window','docenteServices','$sessionStorage', function($scope,$window,docenteServices,$sessionStorage){
	 $scope.user = $sessionStorage.data;
     $scope.proyectoInsertar = {}
     $scope.estudiante1 = false;
     $scope.estudiante2 = false;
     
     $scope.listarProyectos = function(id){
        docenteServices.listarProyectos(id).then(function(){
            console.log(docenteServices.response.message);
            $scope.proyectos = docenteServices.response.message;
         });        
     }

     $scope.listarProyectos($scope.user.id);

     $scope.irProyecto = function(proyecto){

        console.log(proyecto);
        $sessionStorage.dataProyect = proyecto;
        $window.location.href = '#/docente/revision';
     
    }
    $scope.insertarProyecto = function(proyecto){
        $scope.proyectoInsertar = proyecto;
        $scope.proyectoInsertar.id_docente = $scope.user.id;
        console.log($scope.proyectoInsertar);

            docenteServices.insertarProyecto($scope.proyectoInsertar).then(function(){
                console.log(docenteServices.response.message);
                if(docenteServices.response.message == 0){
                       $scope.estudiante1 = true;
                       $scope.estudiante2 = false;
                }
                if(docenteServices.response.message == 1){
                       $scope.estudiante2 = true;
                       $scope.estudiante1 = false;
                       setTimeout(function() {
                        $window.location.href = '#/docente';    
                       }, 2000);
                       
                }
                // $scope.proyectos = docenteServices.response.message;
            });        
        
        
    }
}]) 