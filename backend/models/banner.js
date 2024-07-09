const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: {type: String, require: true}
})

bannerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Banner', bannerSchema)
