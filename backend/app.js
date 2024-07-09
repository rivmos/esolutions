const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { unknownEndpoint } = require('./utils/middleware')

/* Config Imports */
const config = require('./utils/config')
const logger = require('./utils/logger')
const { handleError } = require('./utils/error')

/* Express Application Instance */
const app = express()

app.use(cors())
app.use(express.json())
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

/* Mongoose Connection */
mongoose.connect(config.MONGO_URI)
    .then(() => {
        logger.info('Mongo Kissed');
    })
    .catch((error) => {
        logger.error('Failed to connect to MongoDB:', error.message);
    });


/* Router Imports */
const casestudyRouter = require('./controllers/casestudy')
const subscriberRouter = require('./controllers/subscriber')
const enquiryRouter = require('./controllers/enquiry')
const usersRouter = require('./controllers/users')
const dashboardRouter = require('./controllers/dashboard')


/* Middlewares Usage*/
// For static serving user files
app.use('/uploads', express.static('uploads'))
app.use('/api/dashboard', dashboardRouter)
app.use('/api/casestudies', casestudyRouter)
app.use('/api/subscribers', subscriberRouter)
app.use('/api/enquiries', enquiryRouter)
app.use('/api/', usersRouter)


/* API Routes */

/* Root */
app.get('/', (req, res) => {
    res.send('Esolutions Server')
})

/* Unknown EndPoint Route */
app.use(unknownEndpoint)

/*Generic Error Handling Middleware */
app.use(handleError)

module.exports = app