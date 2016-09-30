angular.module('game.components')
.component('game', {
    controller: GameController
});

function GameController(
    State, Data, Stage, Enemy, Pathfinding,
    modelStage
) {
    console.log('Game controller...');

    var self = this;

    State.startLoading();

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'TD', {
       preload: preload, create: create, update: update, render: render
    });

    function preload() {
        console.log('Preload...');

        for (var i = 1; i <= 1; i++) {
    		var s = 'stage_' + i;
    		var j = Data.url + '/www/content/stages/' + i + '/data.json';
    		console.log('Loading: ', s, j);
    		game.load.json(s, j);
            Stage.addStage(s);
    	}


    }

    function update() {
    }

	function loadStart() {
		console.log('load start');
	}

	function fileComplete() {
		console.log('file complete');
	}

	function loadComplete() {
		console.log('load complete');
	}

    function create() {
        console.log('Create...');
        console.log(Stage.stages);
        Stage.stages = _.map(Stage.stages, function(name, iter) {
    		var stage = new modelStage();
            var i = iter += 1;

    		stage.data = game.cache.getJSON('stage_' + i).data;
    		stage.tile.height = stage.data.attributes.size.assets.height;
    		stage.tile.width = stage.data.attributes.size.assets.width;
    		stage.tile.anchor = (stage.data.attributes.size.assets.width) / 2;
    		var data = stage.data;

    		/**
    		 * Determine the asset types
    		 */
    		for (var j = 0; j < data.assetsGroups.length; j++) {
    			var key = data.assetsGroups[j];

    			/**
    			 * Now loading all specific assets
    			 */
    			for (var k = 0; k < data.assets[key].length; k++) {
    				game.load.image(data.assets[key][k], Data.url + '/www/content/stages/' + i + '/' + key + '/' + data.assets[key][k]);
    			}
    		}
            return stage;
        });

        game.load.start();
        game.load.onLoadStart.add(loadStart, this);
        game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(loadComplete, this);
        console.log(game)
        console.log('Complete.');
        console.log(Stage.stages);

        var currStage = Stage.stages[0]

		currStage.pathfinding = Pathfinding.buildPathFinding(currStage);
		currStageBackgroundLayer = Pathfinding.buildLayer(game, 0);

		var h = currStage.tile.height;
		var w = currStage.tile.width;
		var y = 0;
		var x = 0;
		for (var i = 0; i < currStage.data.map.length; i++) {
			for (var j = 0; j < currStage.data.map[i].length; j++) {
				if (currStage.data.map[i][j] === "0") {
					currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.other.default));
				} else if (currStage.data.map[i][j] === "t") {
					currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.other.build));
				} else if (currStage.data.map[i][j] === "p") {
					if (currStage.data.map[i + 1][j] === "p") {
						if (currStage.data.map[i][j - 1] === "p") {
							currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.up.left));
						} else if (currStage.data.map[i][j + 1] === "p") {
							currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.up.right));
						} else {
							currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.vertical));
						}
					} else if (currStage.data.map[i][j + 1] === "p") {
						if (currStage.data.map[i - 1][j] === "p") {
							currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.down.right));
						} else {
							currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.horizontal));
						}
					} else if (currStage.data.map[i][j - 1] === "p") {
						currStageBackgroundLayer.add(game.add.sprite(x, y, currStage.data.tiles.direction.sprite.down.left));
					}
				}
				x += w;
			}
			x = 0;
		 	y += h;
		}
    }

    function render() {
        //  if (loadingCompleted === true) {
        //      Enemy.moveEnemies();
        //  }
    }

}
