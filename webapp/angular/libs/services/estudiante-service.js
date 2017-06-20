var app = angular.module('gitGradApp.estudianteServices',[])

app.factory('estudianteServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				datosProyecto : function(id){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'GET',
					  	url: 'http://192.168.1.7/gitgrad/api/public/project/projectsListStudent/'+id,
                    	})
                        .then(function successCallback(response) {
								self.response 	= response.data;
                                console.log(self.response);
								return d.resolve()	
                            }, function errorCallback(response) {
                            	return d.resolve()	
								self.response 	= response.data
                        });
                       return d.promise;	 
	
				}

	}


	return self;
}])