var users = angular.module('users');

users.controller('UserController', function( $scope, $mdSidenav, $mdUtil) {

    $scope.toggleLeft = buildToggler('left');
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle();
          },300);
      return debounceFn;
    }
});

users.controller('introductionCtrl',['$scope', function($scope){

}]);

users.controller("formCtrl", ["$scope", function($scope){
    $scope.newName = "";
    $scope.newCategory = "";
    $scope.newPrice = "";
    $scope.products = [];

    $scope.loadData = function () {
        $scope.products =[
            { "image":"http://static.usnews.rankingsandreviews.com/images/Auto/custom/12769/2015_Toyota_Camry_Hybrid_10.jpg",
                "name": "Toyota - Camery",
                "year": "2015",
                "price": 26000,
                "detail": "http://www.toyota.com/camry/" },
            {"image": "http://automobiles.honda.com/images/2015/accord-sedan/exterior-gallery/2015-honda-accord-sedan-sport-exterior-side1.jpg",
                "name": "Honda - Accord",
                "year": "2015",
                "price": 27000,
                "detail": "http://automobiles.honda.com/accord-sedan/"},
            {"image": "http://upload.wikimedia.org/wikipedia/commons/d/d9/Ford_Fusion_at_NAIAS_2012_004.jpg",
                "name": "Ford - Fusion",
                "year": "2016",
                "price": 23000,
                "detail": "http://www.ford.com/cars/fusion/"},
            {"image": "http://image.motortrend.com/f/roadtests/sedans/1304_2014_lexus_is_350_sport_first_drive/42934969/2014-lexus-is-350-sport-front-three-quarters.jpg",
                "name": "Lexus - IS350",
                "year": "2016",
                "price": 40000,
                "detail": "http://www.lexus.com/models/IS"},
            {"image": "http://buyersguide.caranddriver.com/media/assets/submodel/6553.jpg",
                "name": "Mazda 3",
                "year": "2016",
                "price": 20000,
                "detail": "http://www.mazdausa.com/"}

        ];
        console.log("nice");
        console.log($scope.products.length);
    }
}]);


users.controller('gridCtrl', ['$scope', 'instagram', function($scope, instagram){
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
}
]);

users.controller('facebookCtrl', ['$scope', '$timeout', 'Facebook', function($scope, $timeout, Facebook){
    $scope.user = {};
    $scope.logged = false;

    // And some fancy flags to display messages upon user status change
    $scope.byebye = false;
    $scope.salutation = false;

    // Watch for Facebook to be ready.
    $scope.$watch(
        function() {
            return Facebook.isReady();
        },
        function(newVal) {
            if (newVal)
                $scope.facebookReady = true;
        }
    );

    var userIsConnected = false;

    Facebook.getLoginStatus(function(response) {
        if (response.status == 'connected') {
            userIsConnected = true;
        }
    });

    //IntentLogin

    $scope.IntentLogin = function() {
        if(!userIsConnected) {
            $scope.login();
        }
    };

    // Login
    $scope.login = function() {
        Facebook.login(function(response) {
            if (response.status == 'connected') {
                $scope.logged = true;
                $scope.me();
            }

        });
    };

    /**
     * me
     */
    $scope.me = function() {
        Facebook.api('/me', function(response) {
            /**
             * Using $scope.$apply since this happens outside angular framework.
             */
            $scope.$apply(function() {
                $scope.user = response;
            });

        });
    };

    // Logout
    $scope.logout = function() {
        Facebook.logout(function() {
            $scope.$apply(function() {
                $scope.user   = {};
                $scope.logged = false;
            });
        });
    }

    // Taking approach of Events :D
    $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status == 'connected') {
            $scope.$apply(function() {
                $scope.salutation = true;
                $scope.byebye     = false;
            });
        } else {
            $scope.$apply(function() {
                $scope.salutation = false;
                $scope.byebye     = true;

                // Dismiss byebye message after two seconds
                $timeout(function() {
                    $scope.byebye = false;
                }, 2000)
            });
        }


    });
}]);

users.controller('musicCtrl', ['$scope','$http', 'player',  function ($scope, $http, player){
    $scope.player = player;
    $http.get('json/albums.json').success(function(data) {
        $scope.albums = data;
    });
}]);

users.directive('debug', function() {
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


users.controller("flipCtrl", ["$scope","game", function($scope, game){
    $scope.game = game;

    $scope.refresh = function(){
       //need to refresh
    }


}]);





