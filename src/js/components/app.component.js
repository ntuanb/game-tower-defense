angular.module('game.components').component('app', {
    template: '<window></window>',
    controller: function AppController(Log) {
        Log.debug('App window.')
    }
});
