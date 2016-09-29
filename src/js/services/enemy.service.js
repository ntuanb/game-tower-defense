angular.module('this.services').factory('Data', DataFunction);

function DataFunction() {
    var self = this;


    this.enemies = [];

    return self;
}
