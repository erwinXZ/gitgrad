var app = angular.module('gitGradApp.estudianteServices',[])

app.factory('estudianteServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				datosProyecto : function(id){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'GET',
					  	url: 'http://localhost/gitgrad/api/public/project/projectsListStudent/'+id,
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
	
				},
			uploadFile : function(file, name,id){
					var d = $q.defer();
					var formData = new FormData();
					formData.append("name", name);
					formData.append("file", file);
					formData.append("id", id);
					return $http.post("http://localhost/gitgrad/api/docs/archivo.php", formData, {
						headers: {
							"Content-type": undefined
						},
						transformRequest: angular.identity
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
				},
				listaProyecto : function(id){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'GET',
					  	url: 'http://localhost/gitgrad/api/public/student/listProyectStudent/'+id,
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
	
				},	


	}


	return self;
}])