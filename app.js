const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const initRoutes = require('./routes').init
initRoutes(app)

const swaggerConfig = require('./config').swaggerConfig
const expressSwagger = require('express-swagger-generator')(app)

expressSwagger(swaggerConfig)

app.listen(3000, function () {
  console.log(
    'listen on 3000, u can check it on http://localhost:3000/api-docs'
  )
})
