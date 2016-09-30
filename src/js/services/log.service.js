angular.module('game.services').factory('Log', LogFunction);

function LogFunction() {
    var self = this;

    this.debug = function() {
        var s = '';
        _.forEach(arguments, function(arg) {
            s += arg + ' ';
        });
        console.log('[DEBUG]', s)
    }

    return self;
}
