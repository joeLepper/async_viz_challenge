var exec = require('child_process').exec
var gutil = require('gulp-util')

module.exports = function (gulp) {
  gulp.task('lint', function () {
    exec('./node_modules/.bin/standard', function (err, unused, complaints) {
      if (err) { /* no op to satisfy js standard */ }
      if (complaints) gutil.log(complaints)
      else gutil.log('lint-free')
    })
  })
}
