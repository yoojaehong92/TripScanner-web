// webpack.config.js
var webpack = require('webpack')

var loaders = [];
// JS loaders
if (process.env.NODE_ENV === 'development') {
  var js_loaders = {
    test: /\.js$/,
    loaders: ['react-hot','babel'],
    exclude: /node_modules/
  }
} else {
  var js_loaders = {
    test: /\.js$/,
    loaders: ['babel'],
    exclude: /node_modules/
  }
}
loaders.push(js_loaders)
// Development loaders
if(process.env.NODE_ENV === 'development'){
  var es_lint = {
    test: /\.js$/,
    loader: 'eslint-loader',
    exclude: /node_modules/
  }
  loaders.push(es_lint)
}



var image_loaders = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack'
  ]
}
loaders.push(image_loaders)

var imageWebpackLoader = {
  mozjpeg: {
    quality: 65
  },
  pngquant:{
    quality: "65-90",
    speed: 4
  },
  svgo:{
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeEmptyAttrs: false
      }
    ]
  }
}

module.exports = {
  devtool: 'source-map',
  entry: './app-client.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: loaders,
    imageWebpackLoader: imageWebpackLoader
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_URL': JSON.stringify(process.env.APP_URL)
    })
 ]
};
