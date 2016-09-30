angular.module('game.services').factory('Stage', StageFunction);

function StageFunction(Pathfinding) {
    var self = this;

    this.stages = [];

    this.stage = {
        data: null,
        pathfinding: null,
    };

    this.all = function() {
        return self.stages;
    }

    this.addStage = function(s) {
        self.stages.push(s);
    }

    this.construct = function (game, currStage) {
        console.log('Constructing...')
	}

    return self;
}
