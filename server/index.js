const { Server } = require('hapi')
const HapiReactViews = require('hapi-react-views');
const Inert = require('inert');
const Vision = require('vision');
const WebpackPlugin = require('hapi-webpack-plugin');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const path = require('path');

const startServer = async () => {
  const server = new Server({
    host: '0.0.0.0',
    port: process.env.PORT || 8080
  });

  await server.register(Vision);
  await server.register(Inert);

  server.views({
    compileOptions: {
      renderMethod: 'renderToString'
    },
    engines: {
      js: HapiReactViews
    },
    path: 'views',
    relativeTo: __dirname
  });

  server.route({
    handler: (request, h) => h.view('index-html'),
    method: 'GET',
    options: {
      state: {
        failAction: 'log',
        parse: true
      }
    },
    path: '/{param*}'
  });

  // server.route({
  //   method: 'GET',
  //   path: '/{param*}',
  //   handler: {
  //     directory: {
  //       path: 'dist'
  //     }
  //   }
  // });

  const compiler = webpack(webpackConfig);

  const assets = {
    publicPath: webpackConfig.output.publicPath
  };

  await server.register({
    options: {
      assets,
      compiler
    },
    plugin: WebpackPlugin
  });

  server.start();
  console.log(`Server running at: http://localhost:${server.info.port}`);
};

/* eslint-enable no-console, no-sync */

startServer();
