angular.module('game.services').factory('Pathfinding', PathfindingFunction);

function PathfindingFunction() {
    var self = this;

    this.formatPathfinding = function (matrix) {
		var n = [];
		for (var i = 0; i < matrix.length; i++) {
			n.push([]);
			for (var j = 0; j < matrix[i].length; j++) {
				if (matrix[i][j] === "p") {
					n[i].push(0);
				} else {
					n[i].push(1);
				}
			}
		}
		return n
	}

    this.buildPathFinding = function(currStage) {
		var matrix = self.formatPathfinding(currStage.data.map);
		var grid = new PF.Grid(matrix);
		var finder = new PF.AStarFinder();
		var path = finder.findPath(
			currStage.data.pathfinding.begin.x,
			currStage.data.pathfinding.begin.y,
			currStage.data.pathfinding.end.x,
			currStage.data.pathfinding.end.y,
			grid
		);
		return {
			matrix: matrix, grid: grid, finder: finder, path: path
		}
	}

    this.buildLayer = function (game, z) {
		var layer = game.add.group();
		layer.z = z;
		return layer;
	}

    return self;
}
