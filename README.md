# fannypack-less
Official Fannypack task for generating an Icon Font from SVG files.

## Installation
`npm install fannypack-iconfont --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-iconfont')

Fannypack.Config.iconFont = {
  // Config.root.src + 'src' dir
  // Where to place your SVG files
  src: 'icons',
  // Where to output the compiled '_icons.sass' file
  sassDest: 'base',
  // Config.root.dest + 'dest' dir
  // Where to send the webfont files
  dest: 'assets/fonts',
  // Auto-run this task in dev mode?
  watchTask: true,
  assetTask: true,
  // File extensions to watch
  extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
}

Fannypack.init()
```

## SVG Files

All files should be the same size, and it is recommended that they be **at least** 250x250 pixels.

Naming your SVG file `house.svg` will create a SASS variable (`$icon-house`) and a CSS class (`.icon--house`).
