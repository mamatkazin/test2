var gulp = require('gulp'),
    concat = require('gulp-concat'),
	autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    path = require('path');

var params = {
    out: 'app',
    levels: ['common.blocks', 'desktop.blocks']
};

gulp.task('default', ['server', 'build']);

gulp.task('build', ['css', 'js']);

gulp.task('server', function() {
    gulp.watch('*.html', ['html']);

    gulp.watch(params.levels.map(function(level) {
        var cssGlob = level + '/**/*.css';
        return cssGlob;
    }), ['css']);

    gulp.watch(params.levels.map(function(level) {
        var jsGlob = level + '/**/*.js';
        return jsGlob;
    }), ['js']);

});

gulp.task('css', function() {
    return gulp.src(['common.blocks/**/*.css', 'desktop.blocks/**/*.css'])
	    .pipe(concat('index.css'))
		.pipe(postcss([ autoprefixer() ]))
	    .pipe(gulp.dest(params.out));
});

gulp.task('js', function() {
    return gulp.src(['common.blocks/**/*.js', 'desktop.blocks/**/*.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest(params.out));

});