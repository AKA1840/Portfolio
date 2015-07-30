'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
  .controller("rootCtrl", function( $scope, $mdSidenav, $mdUtil) {

    $scope.topics = [
      { "name": "Introduction", "icon": "image/svg/Introduction.svg" },
      { "name": "Grid", "icon": "image/svg/Grid.svg" },
      { "name": "Facebook", "icon": "image/svg/FB.svg" },
      { "name": "Music", "icon": "image/svg/Music.svg" },
      { "name": "Flip", "icon": "image/svg/Flip.svg" },
      { "name": "Form", "icon": "image/svg/Form.svg" }
    ]

    $scope.toggleLeft = buildToggler('left');
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle();
          },300);
      return debounceFn;
    }

    $scope.close = function () {
      $mdSidenav('left').close();
    };

  });