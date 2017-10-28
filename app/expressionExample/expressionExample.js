angular
    .module('expressionExample',['ngRoute'])
    .controller('ExpressionExampleController', ['$scope', function($scope) {
      var array = ['Himanshu', 'Aman', 'Shetty'];
      var counter = 0;
        $scope.clickMe = function(clickEvent) {
            $scope.clickEvent = simpleKeys(clickEvent)
            $scope.name = array[counter % array.length];
            counter++;
        }

        function simpleKeys(original) {
            return Object.keys(original).reduce(function(obj, key) {
                obj[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
                return obj;
            }, {});
        }

    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/expressionExample', {
                templateUrl: 'expressionExample/expressionExample.html',
                controller: 'ExpressionExampleController'
            })
    }])
