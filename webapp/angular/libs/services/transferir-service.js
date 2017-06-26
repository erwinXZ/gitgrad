var app = angular.module('gitGradApp.transferirServices',[])

app.factory('transferirServices', ['$http','$q','$rootScope', function($http,$q,$rootScope){

var self ={
				transerirProyecto : function(email){
					var d = $q.defer();
					// console.log(datos);
                    $http({
                      method: 'POST',
					  	url: 'http://localhost/gitgrad/api/public/project/transfer/',
                    	data:{
								_email_student:email.student,
								_email_teacher:email.teacher,
								_id_teacher:email.id
						}
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