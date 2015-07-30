'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.controller('musicCtrl', ['$scope','$http', 'player',  function ($scope, $http, player){
    $scope.player = player;
    $http.get('json/albums.json').success(function(data) {
        $scope.albums = data;
    });
}]);

