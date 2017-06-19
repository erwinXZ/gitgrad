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
	
				},
				insertarProyecto : function(datos){
					var d = $q.defer();
					console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://192.168.1.7/gitgrad/api/public/project/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{
								_name:datos.name,
								_modality:datos.modality,
								_gestion:datos.gestion,
								_cu:datos.cu,
								_id_teacher:datos.id_docente
						}
                    	})
                        .then(function successCallback(response) {
                                // ok
                                // self.cargado		= true;
    							// self.cargando		= false;
								self.response 	= response.data;
								
								return d.resolve()	
                            }, function errorCallback(response) {
                            // ko
                            	return d.resolve()	
                                // self.cargado		= true;
    							// self.cargando		= false;
								self.response 	= response.data
                        });
                       return d.promise;	 
	
				}

	}


	return self;
}])