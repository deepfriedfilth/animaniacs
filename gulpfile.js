var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function(cb) {
	pump([
			// grab all .js files is js/ dir
			gulp.src('js/*.js'),
			// minify 'em
	        uglify(),
	        // destination will be dist/ dir
	        gulp.dest('dist')
		],
		cb
	);
});

gulp.task('css', function() {
	return gulp.src('/css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/css'))
});
gulp.task('default', ['compress', 'css']);
