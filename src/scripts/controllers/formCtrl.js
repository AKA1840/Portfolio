'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.controller("formCtrl", ["$scope", function($scope){
    $scope.newName = "";
    $scope.newCategory = "";
    $scope.newPrice = "";
    $scope.products = [];

    $scope.loadData = function () {
        $scope.products =[
            { "image":"http://static.usnews.rankingsandreviews.com/images/Auto/custom/12769/2015_Toyota_Camry_Hybrid_10.jpg",
                "name": "Toyota - Camery",
                "year": "2015",
                "price": 26000,
                "detail": "http://www.toyota.com/camry/" },
            {"image": "http://automobiles.honda.com/images/2015/accord-sedan/exterior-gallery/2015-honda-accord-sedan-sport-exterior-side1.jpg",
                "name": "Honda - Accord",
                "year": "2015",
                "price": 27000,
                "detail": "http://automobiles.honda.com/accord-sedan/"},
            {"image": "http://upload.wikimedia.org/wikipedia/commons/d/d9/Ford_Fusion_at_NAIAS_2012_004.jpg",
                "name": "Ford - Fusion",
                "year": "2016",
                "price": 23000,
                "detail": "http://www.ford.com/cars/fusion/"},
            {"image": "http://image.motortrend.com/f/roadtests/sedans/1304_2014_lexus_is_350_sport_first_drive/42934969/2014-lexus-is-350-sport-front-three-quarters.jpg",
                "name": "Lexus - IS350",
                "year": "2016",
                "price": 40000,
                "detail": "http://www.lexus.com/models/IS"},
            {"image": "http://buyersguide.caranddriver.com/media/assets/submodel/6553.jpg",
                "name": "Mazda 3",
                "year": "2016",
                "price": 20000,
                "detail": "http://www.mazdausa.com/"}

        ];
        console.log("nice");
        console.log($scope.products.length);
    }
}]);