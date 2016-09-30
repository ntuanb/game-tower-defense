angular.module('game.services').factory('Stage', StageFunction);

function StageFunction(Log, Pathfinding) {
    var self = this;

    this.stages = [undefined];

    this.currentStage = null;
    this.currentStageIdx = -1;
    this.currentStageTiles = null;

    this.all = function() {
        return self.stages;
    }

    this.first = function() {
        var i = 1;
        self.currentStageIdx = i;
        self.currentStage = self.stages[i];
    }

    this.addStage = function(s) {
        self.stages.push(s);
        Log.debug('Stages updated.', self.stages.length)
    }

    this.construct = function (game, currStage) {
        console.log('Constructing...')
	}

    return self;
}
