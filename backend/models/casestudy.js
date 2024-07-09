const mongoose = require('mongoose')

const casestudySchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: String,
    description: String,
    content: String
})

casestudySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('CaseStudy', casestudySchema)
