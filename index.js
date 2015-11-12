var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

var iconfont  = require('gulp-iconfont')
var generate  = require('./generateSass')

Fannypack.Tasks['iconFont'] = function(config){
  if(!config.iconFont) return

  var fontPath = $.Pather.join(config.root.dest, config.iconFont.dest)
  var cssPath = $.Pather.join(config.root.dest, config.sass.dest)

  var settings = {
    // name: package.name + ' icons',
    src: $.Pather.join(config.root.src, config.iconFont.src, '/*.svg'),
    dest: $.Pather.join(config.root.dest, config.iconFont.dest),
    sassDest: $.Pather.join(config.root.src, config.sass.src, config.iconFont.sassDest),
    template: $.Pather.normalize('./gulp/tasks/iconFont/template.sass'),
    sassOutputName: '_icons.sass',
    fontPath: $.Pather.relative(cssPath, fontPath),
    className: 'icon',
    options: {
      svg: true,
      timestamp: 0, // see https://github.com/fontello/svg2ttf/issues/33
      fontName: 'icons',
      appendUnicode: true,
      normalize: false,
      formats: config.iconFont.extensions
    }
  }

  gulp.task('iconFont', function() {
    return gulp.src(settings.src)
      .pipe( iconfont(settings.options) )
      .on( 'glyphs', generate(settings) )
      .on( 'error', $.ErrorHandler )
      .pipe( gulp.dest(settings.dest) )
  })

  // module.exports = settings
};
