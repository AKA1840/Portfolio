'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.factory('game', function() {
    var tileNames = ['ace', 'king', 'queen', 'jack', 'ten', 'nine',
        'eight', 'seven','six'];

    return new Game(tileNames);
});