const casestudyRouter = require('express').Router()
const CaseStudy = require('../models/casestudy')
const CaseStudyService = require('../services/casestudy')
const { uploadCaseStudy } = require('../utils/middleware')
const logger = require('../utils/logger')
const { verifyTokenMiddleware } = require('../utils/auth')
const { handleError } = require('../utils/error')
const { newCaseStudySchema } = require('../schemas/casestudy')
const { paginationSchema } = require('../schemas/common')
const mongoose = require('mongoose')

casestudyRouter.get('/all', async (req, res) => {
    try {
        const casestudies = await CaseStudy.find({}).select('title description image')
        res.json(casestudies)
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
})

casestudyRouter.use(verifyTokenMiddleware)

casestudyRouter.post('/', async (req, res) => {
    const { error } = paginationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ errors: error.details });
    }

    const { pageIndex, pageSize, query } = req.body
    
    try {
        let filter = {};
        if (query) {
            filter.title = { $regex: new RegExp(query, 'i') }; // Case-insensitive regex search
        }

        const [casestudies] = await Promise.all([
            CaseStudy.find(filter)
                .skip((pageIndex - 1) * pageSize)
                .limit(pageSize),
        ]);

        res.json({
            success: true,
            data: casestudies,
            total: casestudies.length,
        });
    } catch (error) {
        handleError(res, "Error fetching case studies: ", error)
    }
})





casestudyRouter.get('/:id', async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    try {
        const caseStudy = await CaseStudy.findById(id)
        caseStudy ? res.status(200).json(caseStudy) : res.status(404).json({message: "The Case Study Doesn't Exist"})
    }
    catch(error) {
        handleError(res, "Error fetching the case study", error)
    }
})


casestudyRouter.post('/save', uploadCaseStudy.single('image'), async (req, res) => {

    const { error } = newCaseStudySchema.validate(req.body);

    if (error) {
        return res.status(400).json({ errors: error.details });
    }

    const { id, title, content, description, image } = req.body;

    const uploadedImage = req.file ? req.file.filename : null;

    try {
        const casestudy = await CaseStudyService.saveOrUpdateCaseStudy({
            id,
            title,
            content,
            description,
            image,
            uploadedImage
        });

        logger.info(id ? 'CaseStudy updated' : 'CaseStudy saved');
        res.status(201).json(casestudy);
    } catch (err) {
        handleError(res, 'Error saving case study', err);
    }
});


casestudyRouter.delete('/delete', async (req, res) => {
    const { id } = req.body
    try {
        const casestudy = await CaseStudy.findById(id);

        if (!casestudy) {
            return res.status(404).json({ message: "Case study not found" });
        }

        // Delete associated artworks
        await CaseStudy.deleteOne({ _id: id })

        res.status(204).json({ message: "Case study deleted successfully" });
    } catch (error) {
        handleError(res, 'Error deleting case study: ', error)
    }
});


module.exports = casestudyRouter 