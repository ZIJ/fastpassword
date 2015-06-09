var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
    return gulp.src(['src/**/*.js', 'test/**/*.js', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('default', ['lint', 'build']);
