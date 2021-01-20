const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig(webpack => {
  return {
    plugins: [new webpack.DefinePlugin({ __VUE_OPTIONS_API__: 'true', __VUE_PROD_DEVTOOLS__: 'false' })]
  }
})

mix.sass('resources/sass/app.scss', 'public/css').sourceMaps(false, 'source-map')
mix.js('resources/js/app.js', 'public/js').vue({ version: 3 })

mix.sass('resources/sass/admin/admin.scss', 'public/css').sourceMaps(false, 'source-map')
mix.js('resources/js/admin.js', 'public/js').vue({ version: 3 })

// cache busting in production
if (mix.inProduction()) {
  mix.version()
}
