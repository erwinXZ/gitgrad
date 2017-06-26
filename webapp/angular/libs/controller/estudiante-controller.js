var app = angular.module('gitGradApp.estudianteCtrl', ["ngStorage", "angularFileUpload"]);

// controlador clientes
app.controller('estudianteCtrl', ['$http','$scope','$window','FileUploader','$sessionStorage', 'estudianteServices',function($http,$scope,$window,FileUploader,$sessionStorage, estudianteServices){
	
    $scope.user = $sessionStorage.data;
    $scope.mostrarCorrecto = false;
    $scope.gif = false;
    $scope.datosProyecto = function(id){
        estudianteServices.datosProyecto(id).then(function(){
            $scope.proyecto = estudianteServices.response.message[0];
            console.log(estudianteServices.response.message);
        })
    }
    $scope.listaProyecto = function(id){
        estudianteServices.listaProyecto(id).then(function(){
            $scope.listaProyecto = estudianteServices.response;
            console.log($scope.listaProyecto);
        })
    }      

    $scope.datosProyecto($scope.user.id);
    setTimeout(function() {
        $scope.listaProyecto($scope.proyecto.id);
    }, 1000);
    

    $scope.uploadFile = function(){
            var name = $scope.name;
            var file = $scope.file;
            $scope.gif = true;
        estudianteServices.uploadFile(file, name,$scope.proyecto.id).then(function(res)
            {
                 
                console.log(res);
                $scope.gif = false;
                $scope.mostrarCorrecto = true;
            })
        }
    

}]) 
app.directive('uploaderModel', ["$parse", function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) 
		{
			iElement.on("change", function(e)
			{
				$parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
			});
		}
	};
}])