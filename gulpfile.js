// gulpfile.js
var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
	server.run(['app.js']);
	// 先重启服务器，然后自动刷新页面
	gulp.watch(['views/*.html'], server.run);
	gulp.watch(['views/*.html'], server.notify);
	
	gulp.watch(['public/images/**/*'], server.notify);
	gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
})


