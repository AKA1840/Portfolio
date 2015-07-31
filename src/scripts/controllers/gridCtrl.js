'use strict';
/*
 * Name: gridCtrl
 * Controller for the Grid page
 */

angular.module("amApp")
  .controller('gridCtrl',  function($scope, instagram){
      $scope.layout = 'grid';
      $scope.pics = [];
      instagram.fetchPopular(function(data){
          $scope.pics = data;
      });
      $scope.refresh = function(){
          instagram.fetchPopular(function(data){
              $scope.pics = data;
          });
      }
  });