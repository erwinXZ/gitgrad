var app = angular.module( 'gitGradApp',[ 
		// 'ngRoute','gitGradApp.form1Ctrl'
			'gitGradApp.gitGradServices'
		]);

app.controller('mainCtrl',['$scope','gitGradServices', function($scope,gitGradServices){
	// $scope.benji = "kaya";
	   $scope.npage = "";
		$scope.mostrar = function(){
				gitGradServices.listar().then(function(){
					$scope.comentarios = gitGradServices.comentarios;
					console.log("listar");
					console.log($scope.comentarios)
				});
		}	
		$scope.mostrar();

		$scope.mostrarEliminar = function(id){
			console.log(id);
			$scope.id = 0;
			$("#eliminarModal").modal();
			$scope.id = id;
			
		}
		$scope.eliminar = function(){
			console.log($scope.id);
			var id = $scope.id
			gitGradServices.eliminar(id).then(function(){
				$scope.response = gitGradServices.response;
				console.log($scope.response)
				$("#eliminarModal").modal("hide");
				$scope.mostrar();
			});
			// $scope.id = 0;
			// $("#eliminarModal").modal();
			// $scope.id = id;
			
		}
		$scope.botonAgregar = function(){
			var texto = document.getSelection();
    // console.log(texto.anchorNode.data);
    // console.log(texto.extentNode.data);
    // console.log(texto);
	$("#insertarModal").modal();
		interruptor = false;
		var text = "";
		$('.textLayer').children('div').each(function(index){
			if($(this).text() == texto.anchorNode.data){
				// $('#texto-entrada').html($(this).text());
				interruptor = true;
				textstart = $(this).text() ;
			}
			if(interruptor){
				text = text + $(this).text();
				$(this).css('background', "#ffff00");
			}

			if($(this).text() == texto.extentNode.data){
				interruptor = false;
				textend = $(this).text();	
				// $('#texto-salida').html($(this).text());
				// $('#texto-completo').html(text);
			}
		});
		var npage = document.getElementById("pageNumber").value;
		$scope.datos = {
			text:text,
			textstart:textstart,
			textend:textend,
			npage:npage,
			id_teacher:21,
			id_document:1
		}
		console.log($scope.datos)

		return $scope.datos;
    
}

		$scope.insertar = function(obs){
			
			$scope.datos.obs =obs;
			console.log($scope.datos)
			datos = $scope.datos
			gitGradServices.insertar(datos).then(function(){
				$scope.response = gitGradServices.response;
				console.log($scope.response)
				$scope.mostrar();
				$("#insertarModal").modal("hide");
			});
		}
		// $scope.varPag =function (p){
		// 	$scope.npage = p;
		// 	console.log($scope.npage);
		// }
		// $scope.eliminar() = function(){
		// 	var id = $scope.id;
	
		// }	

}]);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
// ================================================
//   Rutas
// ================================================
// app.config([ '$routeProvider', function($routeProvider){
// 	$routeProvider
// 		.when('/',{
// 			templateUrl: 'pages/home.html'
// 			// controller: 'dashboardCtrl'
// 		})
// 		.when('/form1',{
// 			templateUrl: 'pages/form1.html',
// 			controller : 'form1Ctrl'
// 		})
// 		.otherwise({
// 			redirectTo: '/'
// 		})
// }]);

// app.config(['$locationProvider', function($locationProvider) {
//   $locationProvider.hashPrefix('');
// }]);


