let gulp = require('gulp'), 
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});


gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('src/*.html', gulp.parallel('html'))
  });

gulp.task('default', gulp.parallel('browser-sync', 'watch'))