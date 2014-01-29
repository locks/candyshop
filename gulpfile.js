var gulp = require('gulp');
var gutil = require('gulp-util');
var sweetjs = require('gulp-sweetjs');

gulp.task('scripts', function() {
  gulp.src('*.sjs')
    .pipe(concat("index.js"))
    .pipe(gulp.dest('./'))
});
