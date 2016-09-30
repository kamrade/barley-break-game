'use strict'

var gulp         = require('gulp');
var concatCss    = require('gulp-concat-css');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var minifyCSS    = require('gulp-minify-css');
var autoPrefixer = require('gulp-autoprefixer');
var livereload   = require('gulp-livereload');
var connect      = require('gulp-connect');
var sass         = require('gulp-sass');
//var uncss        = require('gulp-uncss');


gulp.task('js', function(){
	gulp.src('src/js/*.js')
		.pipe(connect.reload())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('sass', function() {
	gulp.src('src/sass/style.sass')
    .pipe(sass())
    //.pipe(uncss({html:['index.html']}))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('css', function() {
	gulp.src('src/css/*.css')
		//.pipe(concatCss("bundle.css"))
    .pipe(autoPrefixer({
			browsers: ['last 2 versions', '> 1%', 'IE 8'],
			cascade: false
		}))
		.pipe(gulp.dest('src/css-prefix/'));
});

gulp.task('css-min', function(){
	gulp.src('src/css-prefix/*.css')
    .pipe(minifyCSS(''))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('dist/css/'))
    //.pipe(notify('Done!'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('html', function(){
	gulp.src('index.html')
			.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('src/sass/*.sass', ['sass']);
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/css/*.css', ['css']);
	gulp.watch('src/css-prefix/*.css', ['css-min']);
	gulp.watch('index.html', ['html']);
	gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['connect', 'html', 'js', 'sass', 'css', 'css-min', 'watch']);