let options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: '模拟Api Server',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/',
    produces: ['application/json'],
  },
  basedir: __dirname, //app absolute path
  files: ['../routes/**/*.js'], //Path to the API handle folder
}

exports.swaggerConfig = options
