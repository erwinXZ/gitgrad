var app = angular.module('gitGradApp.gitGradServices',[])

app.factory('gitGradServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				insertar : function(datos){
					var d = $q.defer();
					console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://192.168.43.178/gitgrad/api/public/observation/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{
								_text:datos.text,
								_textstart:datos.textstart,
								_textend:datos.text,
								_npage:datos.npage,
								_description:datos.obs,
								_id_teacher:datos.id_teacher,
								_id_document:datos.id_document
						}
                    	})
                        .then(function successCallback(response) {
                                // ok
                                // self.cargado		= true;
    							// self.cargando		= false;
								self.response 	= response.data;
								console.log(self.response);
								return d.resolve()	
                            }, function errorCallback(response) {
                            // ko
                            	return d.resolve()	
                                // self.cargado		= true;
    							// self.cargando		= false;
								self.response 	= response.data
                        });
                       return d.promise;	 
	
				},		
				listar : function(id){
					var doc = id;
					var d = $q.defer()
                    $http({
                      method: 'POST',
					  	url: 'http://192.168.43.178/gitgrad/api/public/observation/read/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{'id':doc}
                    	})
                        .then(function successCallback(response) {
                                // ok
                                self.cargado		= true;
    							self.cargando		= false;
								self.comentarios 	= response.data;
	
								console.log(self.response);
								return d.resolve()	
                            }, function errorCallback(response) {
                            // ko
                            	return d.resolve()	
                                self.cargado		= true;
    							self.cargando		= false;
								self.comentarios 	= response.data
                        });
                       return d.promise;	 
	
				},					
				eliminar : function(id){
					var d = $q.defer()
                    $http({
                      method: 'DELETE',
					  	url: 'http://192.168.43.178/gitgrad/api/public/observation/'+id,
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                    	})
                        .then(function successCallback(response) {
                                // ok
								self.response 	= response.data;
								
								self.listar()
								return d.resolve()	
                            }, function errorCallback(response) {
                            // ko
								self.response 	= response.data;
                            	return d.resolve()	
                        });
                       return d.promise;
					}	

	}


	return self;
}])