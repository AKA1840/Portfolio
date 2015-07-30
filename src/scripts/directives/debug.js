'use strict';
/*
 * Name: rootCtrl
 * Controller for the application root
 */

angular.module("amApp")
.directive('debug', function() {
    return {
        restrict: 'E',
        scope: {
            expression: '=val'
        },
        template: '<pre>{{debug(expression)}}</pre>',
        link: function(scope) {
            scope.debug = function(exp) {
                return angular.toJson(exp, true);
            };
        }
    }
});