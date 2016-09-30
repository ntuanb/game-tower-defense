angular.module('game.services').factory('Data', DataFunction);

function DataFunction() {
    var self = this;

    this.url = 'http://localhost:8080';
    this.stages = 0;

    this.preload = function(game) {
    }

    return self;
}
