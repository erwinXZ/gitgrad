var app = angular.module('gitGradApp.loginCtrl', ["ngStorage"]);

// controlador clientes
app.controller('loginCtrl', ['$scope','$window','loginServices','$sessionStorage', function($scope,$window,loginServices,$sessionStorage){
	
    $scope.user = {};
    $scope.v1 = false;
    $scope.v2 = false;
    $scope.logIn = function(user){
        // console.log(user);
                loginServices.logIn(user).then(function(){
                    $scope.loginResponse = loginServices.response.mesagge;
                    // console.log($scope.loginResponse);
                    if($scope.loginResponse.respuesta){
					    // console.log($scope.loginResponse.respuesta);
					    console.log("Login Incorrecto");
                        $scope.v2 = true;
                        $scope.v1 = false;
			    	}else{
                        console.log("Login Correcto");
                        console.log($scope.loginResponse);
                        $scope.v1 = true;
                        $scope.v2 = false;
                        if($scope.loginResponse.rol == 2){
                            $sessionStorage.data = $scope.loginResponse;
                            console.log("Es docente");
                            setTimeout(function() {
                                 $window.location.href = '#/docente';
                             }, 2000);

                        }else{
                            console.log("Es Estudiante");
                            $sessionStorage.data = $scope.loginResponse;
                        }   
                    }
                
                });

    }
    $scope.registro = function (){
        $window.location.href = '#/registro';
    }
}]) 