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
    return runSequence('sass', ['tsc', 'font'], cb);
})

gulp.task('tsc', tscTask);
gulp.task('font', fontTask);
gulp.task('sass', sassTask);
gulp.task('cleanLib', cleanLib);
gulp.task('copySass', copySass);

function cleanLib() {
    return gulp
        .src('lib', { read: false })
        .pipe(clean());
}

function tscTask() {
    var tsResult = tsProject.src('src').pipe(gulpTypescript(tsProject));
    return merge([
        tsResult.dts
            .pipe(gulp.dest('dist')),
        tsResult.js
            .pipe(gulp.dest('dist'))
    ])
}

function fontTask() {
    var tsResult = gulp
        .src('src/fonts/**')
        .pipe(gulp.dest('lib/src/fonts'));
}

function sassTask() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/src'))
}

function copySass() {
    return gulp.src('./src/**/*.scss', { base: './src' })
        .pipe(gulp.dest('./lib'))
}