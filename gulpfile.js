const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
 const browserSync = require('browser-sync').create();

 const cssFilesArray = [
    "app/scss/main.scss",
 ];

//scss task
function scssTask(){
    return src(cssFilesArray, { sourcemaps:true })
    .pipe(sass())
    .pipe(concat(".bundle.css"))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('dist', { sourcemaps:'.'}));
}

// scss task minified
function scssTaskMinified(){
    return src(cssFilesArray, { sourcemaps:true })
    .pipe(sass())
    .pipe(concat(".bundle.css"))
    .pipe(postcss([autoprefixer()]), cssnano())
    .pipe(rename("bundle.min.css"))
    .pipe(dest('dist', { sourcemaps: '.'}))
}

// Array of javascript files 
const jsFilesArray = [
    "app/venders/jquery/jquery-3.7.0.min.js",
    "app/js/main.js",
];

// JavaScript task
function jsTask() {
    return src(jsFilesArray, { sourcemaps: true })
    .pipe(concat("bundle.js"))
    .pipe(terser())
    .pipe(rename("bundle.min.js"))
    .pipe(dest('dist', { sourcemaps: '.'}))
}

function browserSyncServe(cb){
    browserSync.init({
        server:{
            baseDir: '.'
        }
    })
    cb();
}

// browserSync reload the server when make changes in the code
function browserSyncReload(cb){
    browserSync.reload();
    cb();
}

// watch task
function watchTask(){
    watch("*.html", browserSyncReload);
    watch(["app/scss/**/*.scss", "app/js/main.js"], 
        series(scssTask, scssTaskMinified, jsTask, browserSyncReload)
    );
}

exports.default = series(
    scssTask, scssTaskMinified, 
    jsTask, browserSyncServe, watchTask
);