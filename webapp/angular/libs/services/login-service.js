var app = angular.module('gitGradApp.loginServices',[])

app.factory('loginServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				logIn : function(datos){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://localhost/gitgrad/api/public/client/signIn/',
                        // url: 'http://localhost/gitgrad/APIPOLLO/public/observation/read/',
                        data:{
								_email:datos.email,
								_password:datos.password
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