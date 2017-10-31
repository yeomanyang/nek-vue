var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('../src/styles/src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('../dist/styles'));
});

// // 编译less
// gulp.task('css', function () {
//     gulp.src('../src/styles/index.less')
//         .pipe(less())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'ie > 8']
//         }))
//         .pipe(cleanCSS())
//         .pipe(rename('nek-vue.css'))
//         .pipe(gulp.dest('../dist/styles'));
// });

// 拷贝字体文件
gulp.task('copyfonts', function () {
    gulp.src('../src/styles/common/iconfonts/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['compile', 'copyfonts']);
