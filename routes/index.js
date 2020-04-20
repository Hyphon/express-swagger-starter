const bannerRoutes = require('./banner')

function init(app) {
  app.get('/test', function (req, res, next) {
    res.send('hello')
  })

  bannerRoutes(app)
}

exports.init = init
