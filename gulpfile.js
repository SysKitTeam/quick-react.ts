var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpTypescript = require('gulp-typescript');
var typescript = require('typescript');
var merge = require('merge2');
var react = require('gulp-react');
var clean = require('gulp-clean');
var gulpTsc = require('gulp-tsc');
var sass = require('gulp-sass')
var runSequence = require('run-sequence');

var tsProject = gulpTypescript.createProject('tsconfig.json', {
    typescript: typescript,
    noExternalResolve: true
});

gulp.task('build', function (cb) {
    return runSequence('copySass','font', cb);
})

gulp.task('tsc', tscTask);
gulp.task('font', fontTask);
gulp.task('cleanLib', cleanLib);
gulp.task('copySass', copySass);

function cleanLib() {
    return gulp
        .src('lib', { read: false })
        .pipe(clean());
}

function tscTask() {
    var tsResult = tsProject.src('./src', { base: './src' }).pipe(gulpTypescript(tsProject));
    return merge([
        tsResult.dts
            .pipe(gulp.dest('./lib')),
        tsResult.js
            .pipe(gulp.dest('./lib'))
    ])
}

function fontTask() {
    var tsResult = gulp
        .src('src/fonts/**')
        .pipe(gulp.dest('lib/fonts'));
}

function copySass() {
    return gulp.src('./src/**/*.scss', { base: './src' })
        .pipe(gulp.dest('./lib'))
}