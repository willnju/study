var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function() {
    gulp.src('./WebPC/src/sass/**/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./WebPC/dist/css/'));
});

gulp.task('watch',function() {
    gulp.watch('./WebPC/src/sass/**/*.scss',['scss']);
});

gulp.task('build', function() {
    gulp.src('./WebPC/src/sass/**/index.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .on('error', sass.logError)
        .pipe(gulp.dest('./WebPC/dist/css/'));
});
