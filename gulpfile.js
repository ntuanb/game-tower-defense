var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var _ = require('lodash');

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

var packages = _.map([
	"lodash/dist/lodash.min.js",
	"angular/angular.min.js",
	"angular-route/angular-route.min.js",
    "angular-ui-router/release/angular-ui-router.min.js",
	"phaser/build/phaser.min.js",
	"pathfinding/pathfinding-browser.min.js"
], function(o) {
    return 'bower_components/' + o;
});

var scripts = [
    'src/js/app.js'
];

var folders = ['controllers', 'helpers', 'models', 'services', 'directives'];
_.forEach(folders, function(f) {
    scripts.push('src/js/' + f + '/module.js');
    scripts.push('src/js/' + f + '/*.js');
});

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
