angular.module('game.components').component('window', {
    template: '<iframe id="init"></iframe>',
    controller: function WindowController() {
        console.log('gameWindow')
    }
});
