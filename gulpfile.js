const gulp = require('gulp')

// create zip
const zip = require('gulp-zip')
gulp.task('zip', () => {
  return gulp.src('./{gulpfile.js,README.md}')
  .pipe(zip('archive.zip'))
  .pipe(gulp.dest('dist'))
})

// delete dir
const del = require('del')
gulp.task('clean', () => {
  return del([
    'dist'
  ]);
})

// sequential
gulp.task('default', gulp.series('clean', 'zip'))

