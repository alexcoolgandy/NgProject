angular.module('guitar', [])
	.run(function(){
		console.log("App stated");
	})
	.controller('IndexController', ['$scope', '$http', function($scope, $http){
		console.log("Controller created");
		
		$scope.getImage = function (){
			$scope.guitars.push(
				{
					src: "http://otvety-znayki.ru/wp-content/uploads/2013/03/akusticheskaya-gitara-1.jpg",
					desc: "guiat number 3",
					date: Date.now()
				});
		}
		
		$scope.guitars = [
				{
					id: 1,
					desc: "My first guiatr",
					src: "http://pngimg.com/upload/guitar_PNG3361.png"
				},
				{
					id: 2,
					desc: "Cute",
					src: "http://pngimg.com/upload/guitar_PNG3338.png"
				}
			];
		
	}]);