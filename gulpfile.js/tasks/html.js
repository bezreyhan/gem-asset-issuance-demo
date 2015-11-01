var config       = require('../config')
if(!config.tasks.html) return

var browserSync  = require('browser-sync')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var htmlmin      = require('gulp-htmlmin')
var path         = require('path')
var jade         = require('gulp-jade')


var paths = {
  src: path.join(config.root.src, config.tasks.html.src, '/**/*.jade'),
  dest: path.join(config.root.dest, config.tasks.html.dest),
}

var htmlTask = function() {
  return gulp.src(paths.src)
    .pipe(jade())
    // .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('html', htmlTask)
module.exports = htmlTask
