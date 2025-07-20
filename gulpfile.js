const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('source/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('build/styles/'));
}

function comprimeImagens() {
    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images/'));
}

function comprimeJS() {
    return gulp.src('source/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts/'));
}

exports.sass = compilaSass;
exports.images = comprimeImagens;
exports.js = comprimeJS;
exports.default = gulp.series(compilaSass, comprimeImagens, comprimeJS); 