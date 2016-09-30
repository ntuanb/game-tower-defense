angular.module('game.services').factory('State', StateFunction);

function StateFunction() {
    var self = this;

    this.loading = false;

    this.startLoading = function() {
        self.loading = true;
    }

    this.finishLoading = function() {
        self.loading = false;
    }

    return self;
}
