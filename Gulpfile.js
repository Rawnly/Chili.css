var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var chalk = require('chalk');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
  console.log(chalk.green.inverse(' Watching ') + chalk.inverse.bold(' for ') + chalk.inverse.red('changes...'));

  gulp.watch('./coffee/**/*.coffee', ['coffee']);
  gulp.watch('./sass/**/*.scss', ['sass']);




  //  --- WEBSERVER ---
  // connect.server({
  //   base: './dist',
  //   port: 4000
  // }, function () {
  //   browserSync.init({
  //       server: {
  //           baseDir: "./dist/",
  //           proxy: "samplechili.dev"
  //       }
  //   });
  // });
  //  --- --- --- --- ---




  gulp.watch('./dist/**/**').on('change', function () {
    browserSync.reload();
  });

});

gulp.task('coffee', function() {
  gulp.src('./coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/js/'));
    console.log( chalk.yellow.inverse.bold('Coffescript ') + chalk.inverse('updated') );
});

gulp.task('sass', function () {
  console.log( chalk.yellow.inverse.bold('Sass ') + chalk.inverse('updated') );
  gulp.src('./sass/chili.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});


gulp.task('help', function () {
  console.log('');
  console.log('gulp' + ' ' + chalk.green('webserver') + '                 ' + chalk.gray('# Start a server.'));
  console.log('gulp' + ' ' + chalk.green('watch') + '                     ' + chalk.gray('# Watch files.'));
  console.log('');
});
