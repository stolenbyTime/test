// 获取 gulp
var gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
// 获取 cleancss 模块（用于压缩 CSS）
var cleanCSS = require('gulp-clean-css');
//合并文件
var concat = require('gulp-concat');
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
var inject = require("gulp-inject");//文件路径注入
var imagemin = require("gulp-imagemin");//压缩图片文件
gulp.task('jscompress', function() {
    // 1. 找到文件
  return  gulp.src(['./js/head.js','./js/detail.js','./js/index.js','./js/jquery-3.1.1.min.js'])
    // 2. 压缩文件
        .pipe(uglify())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('./dist/js'));
});
gulp.task("image",function(){
	gulp.src("./images/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("./dist/img"));
});


// 压缩 css 文件
// 在命令行使用 gulp csscompress 启动此任务
gulp.task('csscompress', function() {
    // 1. 找到文件
  return  gulp.src(['./css/head.css','./css/index.css','./css/detail.css','./css/reset.css'])
    // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('./dist/css'));
});
//html
gulp.task("html",function(){
	gulp.src(["./index.html"])
		.pipe(gulp.dest("./dist"));

	gulp.src(["./detail.html"])
		.pipe(gulp.dest("./dist/"));
});
//压缩
gulp.task('concatCss', function() {
    gulp.src(['./dist/css/*.css'])
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('concatJs', function() {
    gulp.src(['./dist/js/*.js'])
        .pipe(concat('all.js'))
         .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// inject 注入

gulp.task("inject",["html"],function(){
	gulp.src("./dist/index.html")
		.pipe(inject(gulp.src(['./dist/css/all.css','./dist/js/all.js']),{relative:true}))
		.pipe(gulp.dest('./dist'));

	gulp.src("./dist/detail.html")
		.pipe(inject(gulp.src(['./dist/css/all.css','./dist/js/all.js']),{relative:true}))
		.pipe(gulp.dest('./dist/'));
});
gulp.task("watch",function(){
	gulp.watch("./css/**/*",["css"]);
	gulp.watch("./js/**/*",["js"]);
});

gulp.task("default",["image","inject","watch"]);
