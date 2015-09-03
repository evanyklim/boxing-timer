var gulp = require('gulp');
var livereload = require('gulp-livereload'); // only works if server is running
require('require-dir')('./gulp-tasks');  // require gulp-tasks files

// default gulp command
gulp.task('default', ['scripts','styles','watch']);

// watches JS for changes
gulp.task('watch', function () {

	//var server = livereload();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});