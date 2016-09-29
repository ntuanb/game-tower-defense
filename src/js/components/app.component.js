angular.module('game.components').component('app', {
    template: '<window></window>',
    controller: function AppController(Stage) {
        Stage.load();
    }
});
