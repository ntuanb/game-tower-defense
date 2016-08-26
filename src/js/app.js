angular.module('optergy', [
    'optergy.controllers'
]).run(function() {

}).config(function($stateProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'src/js/views/game.html',
            controller: 'GameController'
        });
});
