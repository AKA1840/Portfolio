'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.factory('audio',['$document',  function($document) {
    var audio = $document[0].createElement('audio');
    return audio;
}]);