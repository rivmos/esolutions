const Joi = require('joi')

const newCaseStudySchema = Joi.object({
    title: Joi.string().required().min(10),
    description: Joi.string(),
    content: Joi.string(),
    // image: Joi.any()
    //     .meta({ swaggerType: 'file' })
    //     .required()
    //     .description('Image file'),
})

module.exports = {
    newCaseStudySchema
}