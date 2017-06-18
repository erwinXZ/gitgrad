var app = angular.module('gitGradApp.registroServices',[])

app.factory('registroServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				insertarDocente : function(datos){
					var d = $q.defer();
					console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://192.168.1.7/gitgrad/api/public/teacher/insertTeacher/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{
								_name:datos.name,
								_last_name:datos.lastname,
								_email:datos.email,
								_password:datos.password,
								_cellphone:datos.celular,
								_profession:datos.profesion
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
                insertarEstudiante : function(datos){
					var d = $q.defer();
					console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://192.168.1.7/gitgrad/api/public/student/insertStudent/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{
								_name:datos.name,
								_last_name:datos.lastname,
								_email:datos.email,
								_password:datos.password,
								_cellphone:datos.celular,
								_cu:datos.cu,
                                _college_carrer:datos.carrera
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