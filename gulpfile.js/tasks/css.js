var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var handleErrors = require('../lib/handleErrors')
var autoprefixer = require('gulp-autoprefixer')
var path         = require('path')
// bourbon comes with neat
var neat         = require('node-neat')
var concat       = require('gulp-concat')


var paths = {
  src: [
    './node_modules/normalize-css/normalize.css',
    path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}')
  ],
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var cssTask = function () {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: neat.includePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(concat('global.css'))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
module.exports = cssTask
