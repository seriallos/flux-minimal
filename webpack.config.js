module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: './dist/',
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }

}
