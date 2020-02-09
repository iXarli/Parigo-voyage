// Подключение пакетов
const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      gulpSass = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      notify = require('gulp-notify'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'), 
      cleanCSS = require('gulp-clean-css');


//Задачи для Gulp

//Авторелоад
gulp.task('server', function() {
    browserSync.init({
    	server: {baseDir: './src/'}
    });

    gulp.watch('src/**/*.html').on('change', browserSync.reload);
    gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
});

//Обработчик  Sass

gulp.task('sass', function() {
		return gulp.src('src/scss/main.scss')
		.pipe(sourcemaps.init())
    	//Проверка на ошибки
    	.pipe(plumber({
    		errorHandler: notify.onError(function(err){
    			return {
    				title: 'Styles',
    				message: err.message
    			}
    		})
    	}))
    	.pipe(gulpSass())
    	.pipe( autoprefixer({browsers: ['last 3 versions'],cascade: false}))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(sourcemaps.write())
    	.pipe(gulp.dest('./src/css'))
    	.pipe(browserSync.stream()); 
    	
});


gulp.task('default', gulp.parallel('server','sass'));
























