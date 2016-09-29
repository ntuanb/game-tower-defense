angular.module('game.services').factory('Stage', StageFunction);

function StageFunction() {
    var self = this;

    this.stages = [];

    this.stage = {
        data: null,
        pathfinding: null,
    };

    this.load = function() {

    }

    return self;
}
