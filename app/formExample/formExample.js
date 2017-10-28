angular
    .module('formExample', ['ngRoute'])
    .controller('FormExampleController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/formExample', {
                templateUrl: 'formExample/formExample.html',
                controller: 'FormExampleController'
            })
    }])
