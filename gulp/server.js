var express = require('express')
var gutil = require('gulp-util')
var path = require('path')
var fs = require('fs')
var app = express()

module.exports = function (gulp, reload) {
  gulp.task('server', function () {
    app.use(express.static(path.join(__dirname, '../public')))
    app.listen(3000)
    app.get('/data', function (req, res) {
      fs.readFile(path.join(__dirname, '../public/data.json'), 'utf8', function (err, json) {
        if (err) gutil.log(err)
        res.json(JSON.parse(json))
      })
    })
    reload.listen()
  })
}
