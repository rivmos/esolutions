const Joi = require('joi')

const paginationSchema = Joi.object({
    pageIndex: Joi.number(),
    pageSize: Joi.number(),
    query: Joi.string().allow('')
})

module.exports = {
    paginationSchema
}