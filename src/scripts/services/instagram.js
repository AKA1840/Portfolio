'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.factory('instagram',['$resource', function($resource){
    return {
        fetchPopular: function(callback){
            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
                client_id: '7075dc4b108e4f3ea23629d3fb9d1bb0'
                //   access_token: '50140d56d30f416aa3f66ab6fc11d109'
            },{
                fetch:{method:'JSONP'}
            });
            api.fetch(function(response){
                callback(response.data);
            });
        }
    }
}]);