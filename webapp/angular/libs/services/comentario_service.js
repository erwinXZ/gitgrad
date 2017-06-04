var app = angular.module('gitGradApp.gitGradServices',[])

app.factory('gitGradServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				//  guardar: function( medico ){
				//  	var d = $q.defer()
				// 	 console.log(medico)
				//  	$http.post('api/public/medico/', medico)

				//  	.success(function(respuesta){
				 	
				//  			self.cargarPagina(self.pag_actual)
				//  			d.resolve()	
				//  	})		
				//  	return d.promise
				//  },

				//  eliminar: function( id ){
				//  	var d = $q.defer()
				// 	 console.log("id obser "+id)
				// 	 $http.delete('http://192.168.1.11/Web/gitgrad/api/public/observation/'+id)
				//  	.success(function(response){
				// 			self.response = response.data;
				//  			self.listar()
				//  			d.resolve()	
				//  	})
				//  	return d.promise
				//  },
				// editar: function( medico, id ){
				//  	var d = $q.defer()

				// 	 $http.put('api/public/medico/'+id,medico)

				//  	.success(function(respuesta){
				 	
				//  			self.cargarPagina(self.pag_actual)
				//  			d.resolve()	
				 				
				//  	})
				//  	return d.promise
				//  },
				insertar : function(datos){
					var d = $q.defer();
					console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://localhost/Web/pdfjs/api/public/observation/',
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
				listar : function(){
					var doc = 2;
					var d = $q.defer()
                    $http({
                      method: 'POST',
					  	url: 'http://localhost/Web/pdfjs/api/public/observation/read/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{'id':doc}
                    	})
                        .then(function successCallback(response) {
                                // ok
                                self.cargado		= true;
    							self.cargando		= false;
								self.comentarios 	= response.data;
								
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
					  	url: 'http://localhost/Web/pdfjs/api/public/observation/'+id,
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