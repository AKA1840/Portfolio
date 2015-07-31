'use strict';
/*
 * Name: audio
 * Service of audio
 */

angular.module("amApp")
.factory('audio',  function($document) {
    var audio = $document[0].createElement('audio');
    return audio;
});