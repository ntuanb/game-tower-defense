angular.module('game', [
    'ui.router',
    'game.controllers'
]).run(function() {

}).config(function(
    $stateProvider, $urlRouterProvider
) {
    $stateProvider
        .state('game', {
            url: '/',
            templateUrl: 'src/views/game.html',
            controller: 'GameController'
        });

     $urlRouterProvider.otherwise('/game');
});
