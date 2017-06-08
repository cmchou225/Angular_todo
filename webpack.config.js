module.exports = {
  devtool: 'source-map',
  context: __dirname + '/scripts',
  entry: './app.js',
  output: {
    path: __dirname + '/build',
    filename: './bundle.js'
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    },
    {
      test: /\.html$/,
      use: [ "html-loader" ]
    }
  ]
}

}