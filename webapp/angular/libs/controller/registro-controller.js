var app = angular.module('gitGradApp.registroCtrl', []);

// controlador clientes
app.controller('registroCtrl', ['$scope','registroServices','$window', function($scope,registroServices,$window){
	
    $scope.registro = false;
    $scope.error = false;
    $scope.required = false;
    // $scope.logIn = function(user){
    //     console.log(user)
    // }
     $scope.seleccion = {
        valor: 'docente'
      };

     $scope.controlRadio = function(){
            if($scope.seleccion.valor == "docente"){
                 $scope.d_v = true;  
                 $scope.e_v = false;   
             }
             if($scope.seleccion.valor == "estudiante"){
                 $scope.d_v = false   ;  
                 $scope.e_v = false;   
             }

          $scope.$watch("seleccion.valor", function(newValue, oldValue) {
                if (newValue === oldValue) {
                return;
                }
                console.log(newValue);
            if(newValue == "docente"){
                 $scope.d_v = true;  
                 $scope.e_v = false;   
             }
             if(newValue == "estudiante"){
                 $scope.d_v = false   ;  
                 $scope.e_v = true;   
             }
            });
     } 
     $scope.controlRadio();
     $scope.registrar = function(user){
            console.log( $scope.seleccion );
            console.log( $scope.user );
            if($scope.seleccion.valor == "docente"){
                registroServices.insertarDocente(user).then(function(){
                    $scope.registroResponse = registroServices.response.message;
                    if($scope.registroResponse == 1){
                        $scope.error = false;
                        $scope.registro = true;
                        setTimeout(function() {
                             $window.location.href = '#/';
                        }, 2000);
                       
                    }else{
                        $scope.registro = false;
                        $scope.error = true;
                    }
                    //console.log(registroServices.response)
                });
             }else{

                registroServices.insertarEstudiante(user).then(function(){
                    $scope.registroResponse = registroServices.response.message;
                    if($scope.registroResponse == 1){
                        $scope.error = false;
                        $scope.registro = true;
                        setTimeout(function() {
                             $window.location.href = '#/';
                        }, 2000);
                       
                    }else{
                        $scope.registro = false;
                        $scope.error = true;
                    }
                });
             }
     }
}])