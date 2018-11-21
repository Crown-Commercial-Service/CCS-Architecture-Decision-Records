'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('diagram', shell.task('src/create_images'))