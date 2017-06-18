var app = angular.module('gitGradApp.docenteServices',[])

app.factory('docenteServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				listarProyectos : function(id){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'GET',
					  	url: 'http://192.168.1.7/gitgrad/api/public/project/projectsList/'+id,
                    	})
                        .then(function successCallback(response) {
								self.response 	= response.data;
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