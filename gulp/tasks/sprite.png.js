module.exports = function() {
$.gulp.task('sprite:png', function () {
  var spriteData = $.gulp.src('./source/images/icons/*.png').pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    cssFormat: 'css',
    imgPath: '../img/sprite.png',
    padding: 70
  }));
  return spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')),
  spriteData.css.pipe($.gulp.dest('./source/style/sprite/'));
});
};