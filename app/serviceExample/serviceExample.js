'use strict'

angular
    .module('serviceExample', ['ngRoute','core.serviceExample'])
    .controller('ServiceExampleController', ['$scope', 'notify', function($scope, notify) {
        $scope.callNotitifyService = function(msg) {
            notify(msg);
        }
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/serviceExample', {
            templateUrl: 'serviceExample/serviceExample.html',
            controller: 'ServiceExampleController'
        });
    }])
