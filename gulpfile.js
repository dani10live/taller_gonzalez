// Importar los módulos y plugins que se usarán. Cada uno se impotar con require('modulo')
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug2');
// var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-ninify-css');
sass.compiler = require('node-sass');

// Crear tarea

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade:false
    })
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});
gulp.task('pug', function () {
  return gulp.src('./pug/*.pug')
  .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    // Your options in here.
});
gulp.task('pug2', function () {
  return gulp.src('./pug/templates/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    // Your options in here.
});
gulp.task('default', function () {
  browserSync.init({
    server: './'
  });
    gulp.watch('pug/**/*.pug', gulp.series(['pug']));
    gulp.watch('pug/**/*.pug', gulp.series(['pug2']));
    gulp.watch('scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('./css/*.css').on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

  gulp.task('watch', function(){
    
  });

