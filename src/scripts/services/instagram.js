'use strict';
/*
 * Name: instagram
 * Service for the Instagram
 */

angular.module("amApp")
.factory('instagram',['$resource', function($resource){
    return {
        fetchPopular: function(callback){
            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
                client_id: '7075dc4b108e4f3ea23629d3fb9d1bb0'
            },{
                fetch:{method:'JSONP'}
            });
            api.fetch(function(response){
                callback(response.data);
            });
        }
    }
}]);