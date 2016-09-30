angular.module('game.components').component('window', {
    template: '<game></game>',
    controller: function WindowController(Log) {
        Log.debug('Game window.')
    }
});
