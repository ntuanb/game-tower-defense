angular.module('game.services').factory('mStage', StageModel);

function StageModel() {

    var r = function(data) {
    	var self = this;

    	this.data = data;

    	this.pathfinding = {
    		grid: null,
    		matrix: null,
    		finder: null,
    		path: null
    	};

    	this.tile = {
    		height: data.attributes.size.assets.height,
    		width: data.attributes.size.assets.width,
    		anchor: (data.attributes.size.assets.width) / 2
    	}
    }

    return r;
}
