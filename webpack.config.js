let path = require('path');
let webpack = require('webpack');

let APP_DIR = path.resolve(__dirname, 'src/client/components')
let APP_BUILD = path.resolve(__dirname, 'src/client/public')

module.exports = {
  entry: APP_DIR +  '/index.js',
  output: { 
    path: APP_BUILD, 
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.css?$/,
        use: ['style-loader','css-loader'],
      },
      {
        test: /.sass?$/,
        use: ['style-loader','css-loader','sass-loader'],
      },    
    ]
  }  
};