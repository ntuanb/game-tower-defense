angular.module('game.services').factory('Tile', TilesFunction);

function TilesFunction(Log) {
    var self = this;

    this.buildTileLayer = function (game) {
		var layer = game.add.group();
		layer.z = 0;
		return layer;
	}

    this.buildTiles = function(game, currStage) {
        var currStageTiles = self.buildTileLayer(game);
        var h = currStage.tile.height;
		var w = currStage.tile.width;
		var y = 0;
		var x = 0;

        for (var i = 0; i < currStage.data.map.length; i++) {
			for (var j = 0; j < currStage.data.map[i].length; j++) {
				if (currStage.data.map[i][j] === "0") {
					currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.other.default));
				} else if (currStage.data.map[i][j] === "t") {
					currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.other.build));
				} else if (currStage.data.map[i][j] === "p") {
					if (currStage.data.map[i + 1][j] === "p") {
						if (currStage.data.map[i][j - 1] === "p") {
							currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.up.left));
						} else if (currStage.data.map[i][j + 1] === "p") {
							currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.up.right));
						} else {
							currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.vertical));
						}
					} else if (currStage.data.map[i][j + 1] === "p") {
						if (currStage.data.map[i - 1][j] === "p") {
							currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.down.right));
						} else {
							currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.horizontal));
						}
					} else if (currStage.data.map[i][j - 1] === "p") {
						currStageTiles.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.down.left));
					}
				}
				x += w;
			}
			x = 0;
		 	y += h;
		}
        return currStageTiles;
    }

    return self;
}
