var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

// gulp.task('compile', function() {
//   return gulp.src('../src/styles/src/*.css')
//     .pipe(postcss([salad]))
//     .pipe(cssmin())
//     .pipe(gulp.dest('../lib/styles'));
// });

gulp.task('compile', function() {
  return gulp.src(['../components/**/*.css', '!{style}/**'])
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('../lib'));
});

// 拷贝字体文件
gulp.task('copyfonts', function () {
    gulp.src('../components/style/iconfonts/fonts/*.*')
        .pipe(gulp.dest('../lib/style/fonts'));
});

// 拷贝base
gulp.task('copyfonts', function () {
    gulp.src('../components/style/core/base.css')
        .pipe(gulp.dest('../lib/'));
});

// 拷贝animate
gulp.task('copyfonts', function () {
    gulp.src('../components/style/core/animate.css')
        .pipe(gulp.dest('../lib/'));
});

gulp.task('default', ['compile', 'copyfonts']);
