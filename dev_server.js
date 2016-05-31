var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');
var _ = require('underscore');

var WebpackDevServer = require('webpack-dev-server');
var port = 12345;

_.each(config.entry, (value,key,list) => {
  value.unshift('webpack/hot/only-dev-server');
  value.unshift('webpack-dev-server/client?http://localhost:'+port);
});

_.each(config.module.loaders, (loader) => {
    if (loader.test.exec("any.tsx")) {
        loader.loaders.unshift('react-hot');
    }
})

config.plugins.push(new webpack.HotModuleReplacementPlugin());

// console.log(config);
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './dev_server_root',
  hot: true,
  historyApiFallback: true
}).listen(port, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:'+port);
});
