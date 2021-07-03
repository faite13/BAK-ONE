const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const scssRule = {
  test: /\.scss$/i,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    { loader: 'css-loader' },
    { loader: 'sass-loader' }
  ],
};

const jsRule = {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: [
      { 
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    ]
};

const imgRule = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: './img',
        name: '[name].[ext]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 100
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.80, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75
        }
      }
    },
  ],
};

module.exports = (env) => {
  switch(env.mode) {
    case 'dev':
      return {
        mode: 'development',
        entry: {
            index: './src/js/index.js'
        },
        devServer: {
          contentBase: path.join(__dirname, 'dist'),
          compress: true,
          port: 9000,
          open: true,
          watchContentBase: true
        },
        devtool: false,
        target: ['web', 'es5'],
        module: {
          rules: [scssRule, jsRule, imgRule]
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: '[name].css'
            }),
            new HtmlWebpackPlugin({
              title: 'Development',
              template: 'src/index.html',
              templateParameters: {
                reload: '<script src="http://localhost:35729'+
                '/livereload.js"></script>'
              }
            }),
            new LiveReloadPlugin()
        ],
      };

    case 'build':
      return {
        mode: 'production',
        entry: {
            index: './src/js/index.js'
        },
        devtool: 'source-map',
        target: ['web', 'es5'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            clean: true
        },
        module: {
          rules: [scssRule, jsRule, imgRule]
        },
        plugins: [
            new MiniCssExtractPlugin({
              filename: '[name].css'
            }),
            new HtmlWebpackPlugin({
              title: 'App',
              template: 'src/index.html',
              templateParameters: {
                reload: ''
              }
            })
        ],
      };
    default: break;
  }
};