angular.module('game.components')
.constant('C', {
    URL: 'http://localhost:8080',
    STAGES: {
        COUNT: 0 //countStages();
    }
})
.component('game', {
    template: '<iframe id="game"></iframe>',
    controller: GameController
})
.service('Game', GameService);

function GameService() {

}

function GameController(State) {

    game.preload = function() {

    }

    game.create = function() {

    }

    game.update = function() {

    }

    game.render = function() {

    }

    game.main = new Phaser.Game(800, 600, Phaser.AUTO, 'TD', {
       preload: game.preload, create: game.create, update: game.update, render: game.render
   });

}
