const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique if needed
        // Add a validator for email format
        validate: {
            validator: function(v) {
                // Simple email regex for basic validation
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    name: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Subscriber', subscriberSchema)