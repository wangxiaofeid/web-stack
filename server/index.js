import Express from 'express';
import http from 'http';
import open from 'open';

import pkg from '../package.json';


const app = new Express()

const port = pkg.port||'8080';

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


