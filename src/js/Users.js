angular.module('users', [ 'ngMaterial','ui.router', 'ngResource', 'facebook' ])
      .config(function($stateProvider, $urlRouterProvider){
          $urlRouterProvider.otherwise("/Introduction");
          $stateProvider
              .state('Introduction', {
                  url: "/Introduction",
                  templateUrl: "partial/Introduction.html"
              })
              .state('Grid', {
                  url: "/Grid",
                  templateUrl: "partial/Grid.html",
                  controller: "gridCtrl"
              })
              .state('FB', {
                  url:'/FB',
                  templateUrl: "partial/facebook.html",
                  controller: "facebookCtrl"
              })
              .state('Music', {
                  url:'/Music',
                  templateUrl: "partial/Music.html",
                  controller: "musicCtrl"
              })
              .state('Flip', {
                  url: "/Flip",
                  templateUrl: "partial/Flip.html",
                  controller: "flipCtrl"
              })
              .state('Form', {
                  url:'/Form',
                  templateUrl: "partial/Form.html",
                  controller: "formCtrl"
              });
      })
      .config([ 'FacebookProvider', function(FacebookProvider) {
              var myAppId = '1615889988652582';
              // FacebookProvider.setAppId('myAppId');
              FacebookProvider.init(myAppId);
          }
      ]);

