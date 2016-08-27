angular.module('game.directives').directive('GameWindow', 'GameWindowFunction');

function GameWindowFunction() {
    console.log('asd')

    var r = {};

    r.templateUrl = '/src/js/templates/gameWindow.html';
    r.link = {
        pre: pre,
        post: post
    };

    return r;
};
