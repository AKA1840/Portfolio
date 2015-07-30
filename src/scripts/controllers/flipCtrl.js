'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.controller("flipCtrl", ["$scope","game", function($scope, game){
    $scope.game = game;

    $scope.refresh = function(){
       //need to refresh
    }


}]);