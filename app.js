const express = require('express')
const swaggerConfig = require('./config').swaggerConfig

const app = express()

const initRoutes = require('./routes').init

initRoutes(app)

const expressSwagger = require('express-swagger-generator')(app)

expressSwagger(swaggerConfig)

app.listen(3000, function () {
  console.log(
    'listen on 3000, u can check it on http://localhost:3000/api-docs'
  )
})
