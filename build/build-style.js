var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('../src/styles/src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/styles'));
});

// 拷贝字体文件
gulp.task('copyfonts', function () {
    gulp.src('../src/styles/src/common/iconfonts/fonts/*.*')
        .pipe(gulp.dest('../lib/styles/fonts'));
});

gulp.task('default', ['compile', 'copyfonts']);
