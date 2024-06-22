const CaseStudy = require('../models/casestudy')
const Enquiry = require('../models/enquiry')

const dashboardRouter = require('express').Router()

dashboardRouter.get('/', async (req, res) => {
    try {
        const [totalCaseStudies, totalEnquiries] = await Promise.all([
            CaseStudy.countDocuments({}),
            Enquiry.countDocuments({})
        ])

        res.json([
            { "name": "Case Studies", "value": totalCaseStudies },
            { "name": "Enquiries", "value": totalEnquiries }
        ]);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
})

module.exports = dashboardRouter