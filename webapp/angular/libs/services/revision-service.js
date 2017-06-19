var app = angular.module('gitGradApp.revisionServices',[])

app.factory('revisionServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				listarDocumentos : function(id){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'GET',
					  	url: 'http://192.168.1.7/gitgrad/api/public/document/docsList/'+id,
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