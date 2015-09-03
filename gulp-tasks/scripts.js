var gulp = require('gulp');
var plumber = require('gulp-plumber'); // to prevent stoppage on errors
var uglify = require('gulp-uglify'); // minifies code - IFFEs not done correctly
var concat = require('gulp-concat'); // concat files together
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
	gulp.src('js/*.js')
	.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('build.js'))
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('build'));	
});