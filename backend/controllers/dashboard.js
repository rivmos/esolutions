const CaseStudy = require('../models/casestudy')
const Enquiry = require('../models/enquiry')
const Subscriber = require('../models/subscriber')

const dashboardRouter = require('express').Router()

dashboardRouter.get('/', async (req, res) => {
    try {
        const [totalCaseStudies, totalEnquiries, totalSubscribers] = await Promise.all([
            CaseStudy.countDocuments({}),
            Enquiry.countDocuments({}),
            Subscriber.countDocuments({})
        ])

        res.json([
            { "name": "Case Studies", "value": totalCaseStudies },
            { "name": "Enquiries", "value": totalEnquiries },
            { "name": "Subscribers", "value": totalSubscribers }
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