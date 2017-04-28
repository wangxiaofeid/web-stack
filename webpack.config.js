var path = require('path')
var webpack = require('webpack')
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const clientBabel = {
  cacheDirectory: true,
  babelrc: false,
  presets: [
    [
      'env',
      {
        targets: {
          browsers: [
            'Chrome >= 35',
            'Firefox >= 31',
            'Explorer >= 9',
            'Opera >= 12',
            'Safari >= 7.1'
          ]
        },
        modules: false,
        useBuiltIns: false,
        debug: false,
      }
    ],
    'stage-2',
    'react',
    ['es2015-ie']
  ],
  plugins: [
    "transform-decorators-legacy", ["import", {
      "libraryName": "antd",
      "style": true
    }],
    "transform-class-properties",
    "transform-runtime",
    ['transform-react-jsx-source', 'transform-react-jsx-self']
  ]
};

module.exports = {
  devtool: 'source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, ''),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.ResolverPlugin(
    //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    //   )
  ],
  resolve: {
    modules: ['bower_components', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './client')
        ],
        query: clientBabel
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]',
              minimize: false,
              discardComments: { removeAll: true }
            }
          }, {
            loader: 'postcss-loader',
            options: {
              config: './postcss.config.js'
            }
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              modifyVars: require('./client/themes.js')
            }
          }]
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]',
              minimize: false,
              discardComments: { removeAll: true }
            }
          }, {
            loader: 'postcss-loader',
            options: {
              config: './postcss.config.js'
            }
          }]
        })
      },
      {
        test: /\.est$/,
        use: ['babel-loader', 'template-string-loader']
      }, {
        test: /\.txt$/,
        loader: 'raw-loader'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          minetype: 'application/font-woff'
        }
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          minetype: 'application/font-woff'
        }
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          minetype: 'application/octet-stream'
        }
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          minetype: 'image/svg+xml'
        }
      }, {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ]
  }
}
