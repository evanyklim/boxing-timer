var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload'); // only works if server is running

// log errors when syntax breaks
function errorLog (error) {
	console.error.bind(error);
	this.emit('end');
}

gulp.task('styles', function () {
	gulp.src('scss/**/*.scss')
	//.pipe(plumber())
		.pipe(sass())
		.on('error', errorLog)
		.pipe(gulp.dest('build'))
	//	.pipe(livereload());    // additional testing required with chrome ext.
});