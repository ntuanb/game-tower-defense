angular.module('game', [
    'ui.router',
    'game.controllers',
    'game.components'
]).run(function() {

}).config(function(
    $stateProvider, $urlRouterProvider
) {
     $urlRouterProvider.otherwise('/game');
});
