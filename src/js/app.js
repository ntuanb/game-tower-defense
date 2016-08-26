angular.module('game', [
    'game.controllers'
]).run(function() {

}).config(function($stateProvider) {
    $stateProvider
        .state('game', {
            url: '/game',
            templateUrl: 'src/js/views/game.html',
            controller: 'GameController'
        });
});
