angular.module('game.services').factory('modelStage', StageModel);

function StageModel() {

    var r = function() {
    	var self = this;

    	this.data = null;

    	this.pathfinding = {
    		grid: null,
    		matrix: null,
    		finder: null,
    		path: null
    	};

    	this.tile = {
    		height: null,
    		width: null,
    		anchor: null
    	}
    }

    return r;
}
