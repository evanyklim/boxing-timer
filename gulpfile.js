// simple exercise for learning gulp
// gulp - a build system
// this file must be called gulpfile.js

var gulp = require('gulp');
var uglify = require('gulp-uglify'); // minifies code - IFFEs not done correctly
var sass = require('gulp-sass'); // for sass
var plumber = require('gulp-plumber'); // to prevent stoppage on errors
var livereload = require('gulp-livereload'); // only works if server is running
var concat = require('gulp-concat'); // concat files together
var sourcemaps = require('gulp-sourcemaps');

// log errors when syntax breaks
function errorLog (error) {
	console.error.bind(error);
	this.emit('end');
}

// default gulp command
gulp.task('default', ['scripts','styles','watch']);

gulp.task('scripts', function () {
	gulp.src('js/*.js')
	.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('build.js'))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('build'));	
});

gulp.task('styles', function () {
	gulp.src('scss/**/*.scss')
	//.pipe(plumber())
		.pipe(sass())
		.on('error', errorLog)
		.pipe(gulp.dest('build'))
	//	.pipe(livereload());    // additional testing required with chrome ext.
});

// watches JS for changes
gulp.task('watch', function () {

	//var server = livereload();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});