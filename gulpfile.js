var gulp = require('gulp');
var path = require('path');
var Builder = require('systemjs-builder');
var del = require('del');
var rename = require('gulp-rename');

gulp.task('clean', function(){
    return del([
        './build/**'
    ]);    
})

gulp.task('build', function () {
    var builder = new Builder('.', './systemjs.config.js');

    builder
        .bundle('./app/main.js', 'build.js')
        .then(function () {
            console.log('build complete');
        })
        .catch(function (err) {
            console.log('build error');
            console.log(err);
        });
})

gulp.task('buildsfx', function () {
    var builder = new Builder('.', './systemjs.config.js');

    builder
        .buildStatic('./app/main.js', './build/build.js')
        .then(function () {
            console.log('build complete');
        })
        .catch(function (err) {
            console.log('build error');
            console.log(err);
        });
})

/* get the index file to the root of the build */
gulp.task("index", function(){
    return gulp.src(["prod.html"])
        .pipe(rename('index.html'))
        .pipe(gulp.dest("build"));
});
/* copy node server to build folder */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "server/**" })
        .pipe(gulp.dest("build"));
});
/* styles and other assets */
gulp.task("assets", function(){
    return gulp.src(["styles.css","site.css"])
        .pipe(gulp.dest("build"));
});

gulp.task("resources",['index', 'server', 'assets']);

/* copy the app core files to the build folder */
gulp.task("app", function(){
    return gulp.src(["app/**", "!app/**/*.ts", "!app/**/*.js", "!app/**/*.map"])
        .pipe(gulp.dest("build/app"));
})

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'core-js/client/shim.min.js',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'systemjs/dist/system.src.js',
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});

// all work after clean task
gulp.task('default', ['resources', 'libs', 'buildsfx', 'app']);
