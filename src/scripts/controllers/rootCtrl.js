'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
  .controller("rootCtrl", function( $scope, $mdSidenav, $mdUtil) {

    $scope.topics = [
      { "name": "Introduction", "icon": "image/svg/Introduction.svg", "state":"root.Introduction" },
      { "name": "Grid", "icon": "image/svg/Grid.svg", "state":"root.Grid" },
      { "name": "Facebook", "icon": "image/svg/FB.svg", "state":"root.Facebook" },
      { "name": "Music", "icon": "image/svg/Music.svg", "state":"root.Music" },
      { "name": "Flip", "icon": "image/svg/Flip.svg", "state":"root.Flip" },
      { "name": "Form", "icon": "image/svg/Form.svg", "state":"root.Form" }
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