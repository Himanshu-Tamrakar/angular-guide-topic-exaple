angular
    .module('scopeExample', ['ngRoute'])
    .controller('ScopeExampleController', ['$scope', function($scope) {
        $scope.username = 'Himanshu Tamrakar';
        $scope.sayHello = function() {
            $scope.greeting = `Hello Mr. ${$scope.username}`
        }
        $scope.count = 0;
        $scope.$on('MyEvent', function() {
            $scope.count++;
        })
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/scopeExample', {
                templateUrl: 'scopeExample/scopeExample.html',
                controller: 'ScopeExampleController'
            })
    }])
