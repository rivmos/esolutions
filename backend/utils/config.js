require('dotenv').config()

const PORT = process.env.PORT
const MONGO_URI = process.env.NODE_ENV === 'test' ? process.env.MONGO_TEST_URI : process.env.MONGO_URI
const JWTSECRET = process.env.JWTSECRET

module.exports = { PORT, MONGO_URI, JWTSECRET }