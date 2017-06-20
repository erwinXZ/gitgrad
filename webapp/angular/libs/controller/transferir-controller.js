var app = angular.module('gitGradApp.transferirCtrl', ["ngStorage"]);

// controlador clientes
app.controller('transferirCtrl', ['$scope','$window','$sessionStorage', 'transferirServices',function($scope,$window,$sessionStorage,transferirServices){
	
    $scope.proyecto = $sessionStorage.dataProyect;
    $scope.user = $sessionStorage.data;
    $scope.transferir = " TRANSFERIR ";
    $scope.transferir = function(email){
        email.id = $scope.user.id;
        transferirServices.transerirProyecto(email).then(function(){
            console.log(transferirServices.response.message);
            // switch(transferirServices.response.message){
            //     case 0: console.log("Email del profesor erroneo");
            //     case 1: console.log("tranferido correctamente");
            //     case 2: console.log("Estudiante no existe");
            //     case 3: console.log("El alumno ya se encuentra asignado");
            // }
            if(transferirServices.response.message == 0){
                console.log("Email del profesor erroneo");
            }
            if(transferirServices.response.message == 1){
                console.log("tranferido correctamente");
            }
            if(transferirServices.response.message == 2){
                console.log("Estudiante no existe");
            }
            if(transferirServices.response.message == 3){
                console.log("El alumno ya se encuentra asignado");
            }
        });
    }
}]) 