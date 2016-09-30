angular.module('game.services').factory('Enemy', EnemyFunction);

function EnemyFunction() {
    var self = this;

    this.enemies = [];

    return self;
}
