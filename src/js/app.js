angular.module('game', [
    'ui.router',
    'game.controllers',
    'game.components',
    'game.services'
]).run(function() {

}).config(function(
    $stateProvider, $urlRouterProvider
) {
     $urlRouterProvider.otherwise('/game');
});
