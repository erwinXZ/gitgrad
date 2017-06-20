var app = angular.module('gitGradApp.form1Ctrl', []);

// controlador clientes
app.controller('form1Ctrl', ['$scope', function($scope){
	
	$scope.num1= 0;
    $scope.num2= 0;


	$scope.divi = function(){
        var n1 = parseInt($scope.num1);
        var n2 = parseInt($scope.num2);
        var resu = n1+n2;

        $scope.resultado = resu;
	
	}

}])