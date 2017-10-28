angular
    .module('core.serviceExample')
    .factory('notify', ['$window', function(window) {
        var msgs = [];
        return function(msg) {
            msgs.push(msg);
            if (msgs.length > 2) {
                window.alert(msgs);
                msgs = []
            }
        }
    }])
