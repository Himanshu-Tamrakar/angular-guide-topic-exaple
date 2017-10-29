angular
    .module('withoutUrlComponentExample', [])
    .component('withoutUrlComponentExample', {
        templateUrl: 'withoutUrlComponentExample/withoutUrlComponentExample.html',
        // controller: [function HeroDetailController() {
        //     var ctrl = this;
        //
        //     ctrl.delete = function() {
        //         ctrl.onDelete({
        //             hero: ctrl.hero
        //         });
        //     };
        //
        //     ctrl.update = function(prop, value) {
        //         ctrl.onUpdate({
        //             hero: ctrl.hero,
        //             prop: prop,
        //             value: value
        //         });
        //     };
        // }],
        bindings: {
            hero: '@',
        }
    })
