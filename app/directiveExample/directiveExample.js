angular
    .module('directiveExample', ['ngRoute'])
    .controller('DirectiveExampleController', ['$scope', function($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
        $scope.customer1 = {
            name: 'Naomi1',
            address: '1600 Amphitheatre1'
        };

        $scope.format = 'M/d/yy h:mm:ss a';
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/directiveExample', {
                templateUrl: 'directiveExample/directiveExample.html',
                controller: 'DirectiveExampleController'
            })
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                customer: '='
            },
            templateUrl: 'directiveExample/my-customer.html'
        }
    })
    .directive('myCustomer1', function() {
        return {
            templateUrl: function(elem, attr) {
                return 'directiveExample/customer-' + attr.type + '.html';
            }
        }
    })
    .directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

        function link(scope, element, attrs, controller, transcludeFn) {
          var format, timeoutId;

          function updateTime() {
            element.text(dateFilter(new Date(), format))
          }

          scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime()
          })

          element.on('$destroy', function() {
            $interval.calcel(timeoutId)
          })

          timeoutId = $interval(function () {
            updateTime()
          }, 1000);

        }

        return {
            link: link
        }
    }])
