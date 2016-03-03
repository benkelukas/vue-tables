/**
 * Created by Benke on 03.03.2016.
 */
var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('watch', function () {
    gulp.watch('./lib/**/*.*', function () {
        exec("browserify index.js --s VueTables | uglifyjs -c > dist/vue-tables.min.js", function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            console.log('DONE');
        });
    })
});