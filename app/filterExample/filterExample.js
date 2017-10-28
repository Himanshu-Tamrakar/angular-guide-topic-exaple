angular
    .module('filterExample', ['ngRoute'])
    .controller('FilterExampleController', ['$scope', 'filterFilter', 'reverseFilter',function($scope, filterFilter, reverseFilter) {
        $scope.rupees = 60;

        $scope.array = [{
                name: 'Tobias'
            },
            {
                name: 'Jeff'
            },
            {
                name: 'Brian'
            },
            {
                name: 'Igor'
            },
            {
                name: 'James'
            },
            {
                name: 'Brad'
            }
        ];
        $scope.filteredArray = filterFilter($scope.array, 'a');

        $scope.greeting = 'Hello';
        $scope.filteredGreeting = reverseFilter($scope.greeting);

    }])
    .filter('reverse', function() {
        return function(input, uppercase) {
            input = input || '';
            var out = '';
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out
        }
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/filterExample', {
                templateUrl: 'filterExample/filterExample.html',
                controller: 'FilterExampleController'
            })
    }])
