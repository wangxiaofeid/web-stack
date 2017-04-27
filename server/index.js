import Express from 'express';
import http from 'http';
import open from 'open';
import path from 'path';

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import pkg from '../package.json';
import createServer from './api'


const app = new Express()

const port = pkg.port||'8080';

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(Express.static(path.join(process.cwd(), 'static')));

// 接口
createServer(app);

app.get('*', function (req, res) {
  res.sendfile('index.html');
});

// 监听是否正常启动
const server = http.Server(app);
server.listen(port,(error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    open(`http://localhost:${port}`);
  }
});


