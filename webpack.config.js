const path = require('path')

module.exports = {
  devtool: 'inline-source-map',

  mode: 'development',

  target: 'electron-renderer',

  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/client/index.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
    ]
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      "~": path.resolve(__dirname, 'src'),
    }
  }
}