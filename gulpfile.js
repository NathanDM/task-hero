var gulp = require('gulp');
var gulpAutoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var gulpConcat = require('gulp-concat');
var gulpSass = require('gulp-sass');
var gulpSourcemaps = require('gulp-sourcemaps');

var babelify = require('babelify');
var browserify = require('browserify');
var eslintify = require('eslintify');
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var watchify = require('watchify');

// Build javascript files with browserify, reactify and babelify
function compile(watch) {
  var plugin = [];
  if (watch) {
    plugin = [[watchify, {ignoreWatch: ['**/node_modules/**']}]]
  }
  var bundler = browserify({
    entries: "./src/app/index.jsx",
    debug: true,
    cache: {},
    packageCache: {},
    plugin: plugin,
    transform: [["eslintify"], ["babelify", {"presets": ["es2015", "react"]}]]
  });

  function rebundle() {
    console.log('-> bundling...');
    return bundler.bundle()
      .on('error', function (err) {
        console.error(err);
      })
      .pipe(vinylSourceStream('build.js'))
      .pipe(vinylBuffer())
      .pipe(gulpSourcemaps.init({loadMaps: true}))
      .pipe(gulpSourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function () {
      rebundle();
    });
    bundler.on("time", function (time) {
      console.log("   bundling done in " + time + "ms");
    });
  }
  return rebundle();
}

// Compile sass files into CSS
function sass() {
  return gulp.src("src/assets/sass/main.scss")
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass({
      outputStyle: "compressed",
      includePaths: ["node_modules/"]
    }).on("error", gulpSass.logError))
    .pipe(gulpAutoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpConcat("main.css"))
    .pipe(gulpSourcemaps.write("./"))
    .pipe(gulp.dest("build/"));
}

function img() {
  return gulp.src([
    'src/assets/img/*'])
    .pipe(gulp.dest('build/img'))
}

//Copy all static files
function materialLite() {
  return gulp.src([
    './node_modules/material-design-lite/material.min.js'])
    .pipe(gulp.dest('build/'))
}

gulp.task('build', function () {
  sass();
  materialLite();
  img();
  compile();
});
gulp.task('watch', function () {
  sass();
  materialLite();
  img();
  gulp.watch('src/assets/sass/**/*.scss', sass);
  compile(true);
});

gulp.task('browsersync', function () {
  // Just want static server, no need for hot reload as of now
  // Start browser process
  return browserSync({
    server: {
      baseDir: '.'
    },
    notify: false
  });
});

gulp.task('watchAndLaunch', gulp.parallel('watch', 'browsersync'));

// default task

gulp.task('default', gulp.series('watchAndLaunch'));
