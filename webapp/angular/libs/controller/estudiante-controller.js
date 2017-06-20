var app = angular.module('gitGradApp.estudianteCtrl', ["ngStorage", "angularFileUpload"]);

// controlador clientes
app.controller('estudianteCtrl', ['$http','$scope','$window','FileUploader','$sessionStorage', 'estudianteServices',function($http,$scope,$window,FileUploader,$sessionStorage, estudianteServices){
	
    $scope.user = $sessionStorage.data;
    $scope.mostrarCorrecto = false;
    $scope.datosProyecto = function(id){
        estudianteServices.datosProyecto(id).then(function(){
            $scope.proyecto = estudianteServices.response.message[0];
            console.log(estudianteServices.response.message);
        })
    }   

    $scope.datosProyecto($scope.user.id);

    $scope.uploadFile = function(){
            var name = $scope.name;
            var file = $scope.file;
            
        estudianteServices.uploadFile(file, name,$scope.proyecto.id).then(function(res)
            {
                console.log(res);
                if(res == 1){
                    $scope.mostrarCorrecto = true;
                }else{
                    
                }
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