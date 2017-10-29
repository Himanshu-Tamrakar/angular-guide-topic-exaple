angular
    .module('componentExample', ['ngRoute'])
    .component('componentExample', {
        templateUrl: 'componentExample/componentExample.html',
        controller: [function PhoneListController(Phone) {
            this.hero = {
                name: 'Spawn'
            };
        }]
    })
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
            when('/componentExample', {
                template: '<component-example></component-example>'
            })
        }
    ]);
