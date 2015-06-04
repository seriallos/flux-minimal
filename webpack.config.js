module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    library: 'flux-minimal',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': {
      commonjs2: 'react'
    }
  }
}
