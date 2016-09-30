angular.module('game.services').factory('Data', DataFunction);

function DataFunction(Log) {
    var self = this;

    this.url = 'http://localhost:8080';
    this.stages = 0;

    this.loadJsonMap = function(game, assets) {
        Log.debug(assets);
        _.forOwn(assets, function(files, asset) {
            var i = 1;
            _.forEach(files, function(filename) {
                var s = self.url + '/www/content/stages/' + i + '/' + asset + '/' + filename;
                game.load.image(filename, s);
            });
            i += 1;
        });
    }

    return self;
}
