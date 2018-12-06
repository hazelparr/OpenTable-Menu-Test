const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ['./src/Components/App/App.js'],
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [
          {
            loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
          }
        ]
      },

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'].map(require.resolve),
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public/webpack/'),
    filename: 'bundle.js',
  },
  plugins: [htmlPlugin]
};
