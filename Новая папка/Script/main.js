angular.module('guitar',['ngRoute'])
	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider){
		$routeProvider
		.when ('/Zootopia/gallery', {
			templateUrl: '/views/home/gallery.html',
			controller: 'GalleryController'
		})
		.when('/Zootopia/aboutUs', {
		    templateUrl: '/views/home/aboutUs.html',
		    controller: 'aboutUsController'
		})
		.when('/Zootopia/addNewImage', {
		    templateUrl: '/views/home/addNewImage.html',
			controller:'AddNewImgController'
		})
		.otherwise({
		    redirectTo: '/Zootopia/gallery'
		});

		 	$locationProvider.html5Mode(true);
	}])

	.service('DataImg', function () {


	    var imagesObj = [
			{
			    name: 'AUDI A3 LIMO',
			    src: 'image/a3limo.png',
			    description: 'Comment A3 LIMO',
			    rate: { value: 5 }
			},
			{
			    name: 'AUDI A3 SB',
			    src: 'image/a3sb.png',
			    description: 'Comment A3 SB',
			    rate: { value: 5 }
			},
			{
			    name: 'AUDI A4 AQ',
			    src: 'image/a4aq.png',
			    description: 'Comment A4 AQ',
			    rate: { value: 4 }
            },
            {
                name: 'AUDI A4 AVANT',
                src: 'image/a4avant.png',
                description: 'Comment A4 AVANT',
                rate: { value: 4 }
            },
            {
                name: 'AUDI A6 LIMO',
                src: 'image/a6limo.size.h236.png',
                description: 'Comment A6 LIMO',
                rate: { value: 4 },
            },
            {
                name: 'AUDI A5 SB',
                src: 'image/a5sb.size.h236.png',
                description: 'Comment A5 SB',
                rate: { value: 4 }
            },
	   ];

	    function addNewImg(newImg) {
	        imagesObj.push(newImg);
	    }

	    var result = {
	        ImgName: 'name',
	        getImgObj: function () {
	            return imagesObj;
	        },
	        addImg: addNewImg
	    };
	    return result;
	})

	.controller('GalleryController', ['$scope', 'DataImg', function ($scope, DataImg) {

	    $scope.imgArray = DataImg.getImgObj();

	    $scope.extensionsArray = [
			{
			    extensionChecker: /\.jpe?g$/i,
			    name: 'jpg'
			},
            {
                extensionChecker: /\.png$/i,
                name: 'png'
            },
            {
                extensionChecker: /\.(?!jpe?g|png)$/i,
                name: 'Остальное'
            }
	    ];

	    $scope.filterByExtension = function (img) {
	        const selectedExtensions = $scope.extensionsArray.filter(extension => extension.isChecked);
	        if (selectedExtensions.length) {
	            return selectedExtensions.some(extension => {
	                return extension.extensionChecker.test(img.src);
	            });
	        } else {
	            return true;
	        }
	    };

	    //Всплывающие подсказки

	    $scope.toggleTooltip = function (e) {
            
	        if (e % 3 == 0) {
                event.stopPropagation();
                this.showtooltipRight = !$scope.showtooltipRight;
            }

            else {
                event.stopPropagation();
                this.showtooltipLeft = !$scope.showtooltipLeft;             
	        }

            $scope.hideTooltip = function () {
                this.showtooltipLeft = false;
                this.showtooltipRight = false;
            }
        }
	       
	   

        /*
         $scope.toggleTooltip = function (e,image) {
	        event.stopPropagation();
	        image.showtooltip = !image.showtooltip;
	    }

	    $scope.hideTooltip = function(image){
            image.showtooltip = false;
        }

        */
	}])


	.controller('aboutUsController', ['$scope', 'DataImg', function ($scope, DataImg) {
	    //Контроллер для описания

	}])

	.controller('AddNewImgController', ['$scope', 'DataImg', function ($scope, DataImg) {
	    //Контроллер для добавления новой картинки
	    $scope.newImgUrl;
	    $scope.newImgName;
	    $scope.newImgDescription;
	    $scope.newImgRate = {};
	    $scope.arrayOfRates = [1, 2, 3, 4, 5];

	    $scope.saveText = function () {
	        DataImg.ImgName = $scope.newImgName;
	    }

	    $scope.add = function () {
	        var newObj = {
	            name: $scope.newImgName,
	            src: $scope.newImgUrl,
	            description: $scope.newImgDescription,
	            rate: $scope.newImgRate.value
	        }
	        DataImg.addImg(newObj);
	    }

	}]);