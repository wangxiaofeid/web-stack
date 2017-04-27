var path = require('path')
var webpack = require('webpack')


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
