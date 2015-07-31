'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.controller("flipCtrl", function($scope){
	var tileNames = ['ace', 'king', 'queen', 'jack', 'ten', 'nine',
        'eight', 'seven','six'];


    $scope.game = new Game(tileNames);

    $scope.refresh = function(){
       $scope.game = new Game(tileNames);
    }
});