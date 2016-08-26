var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

/**
 * Log
 */
var log = {};
log.print = function(string) { console.log(string); };
log.newline = function() { log.print('\n'); };
log.newline();

var paths = {
    js: ['./src/js/**/*.js']
};

var packages = [
	"bower_components/lodash/dist/lodash.min.js",
	"bower_components/angular/angular.min.js",
	"bower_components/phaser/build/phaser.min.js",
	"bower_components/pathfinding/pathfinding-browser.min.js"
];

var scripts = [
    'src/js/app.js'
];

var folders = ['controllers', 'helpers', 'models', 'services'];

for (var i = 0; i < folders.length; i++) {
    scripts.push('src/js/' + folders[i] + '/module.js');
    scripts.push('src/js/' + folders[i] + '/*.js');
    log.print('Loading folder: ' + folders[i] + '.');
};

log.newline();

gulp.task('jsPackages', function() {
    return gulp.src(packages)
        .pipe(concat('packages.min.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('js', function() {
    return gulp.src(scripts)
        .pipe(sourcemaps.init())
        // .pipe(ngAnnotate())
        .pipe(concat('app.min.js'))
        // .pipe(uglify({
        //     // mangle: false,
        //     // compress: false
        // }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['js']);
