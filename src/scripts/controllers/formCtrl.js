'use strict';
/*
 * Name: formCtrl
 * Controller for the form page
 */

angular.module("amApp")
.controller("formCtrl", function($scope, $http){
    $scope.newName = "";
    $scope.newCategory = "";
    $scope.newPrice = "";
    $scope.products = [];

    $scope.loadData = function () {
        $http.get('json/cars.json').success(function(data) {
            $scope.products = data;
        });
    }
});
