let gulp = require('gulp'), 
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css')); 
});