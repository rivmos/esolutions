/* Instanciations */
const config = require('./utils/config')
const logger = require('./utils/logger')
const app = require('./app')
require('dotenv').config()


app.listen(config.PORT, () => {
    logger.info(`The Server Is Running On Port : ${config.PORT}`)
})