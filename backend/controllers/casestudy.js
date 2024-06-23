const casestudyRouter = require('express').Router()
const CaseStudy = require('../models/casestudy')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')
const getTokenFrom = require('../utils/auth').getTokenFrom
const config = require('../utils/config')
const { upload, uploadCaseStudy } = require('../utils/middleware')
const { verifyTokenMiddleware } = require('../utils/auth')
const pagination = require('../utils/pagination')

// casestudyRouter.use(verifyTokenMiddleware)

/* Get Products */
casestudyRouter.post('/', async (req, res) => {
    const { pageIndex, pageSize, query } = req.body
    try {
        let [casestudies, total] = await Promise.all([
            CaseStudy.find({}), // Fetch all products
            CaseStudy.countDocuments({}) // Count total number of products
        ]);

        if (query) {
            filteredData = pagination.wildCardSearch(casestudies, query, 'name'); // Assuming 'name' is the field you want to search on
            total = filteredData.length;
            casestudies = pagination.paginate(filteredData, pageSize, pageIndex); // Paginate the filtered data
        } else {
            casestudies = pagination.paginate(casestudies, pageSize, pageIndex); // Paginate all artists if no query
        }
        res.json({
            data: casestudies,
            total: total
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
})

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


/* Get Single Product */
casestudyRouter.get('/:id', (req, res) => {
    const id = req.params.id
    CaseStudy.findById(id).then(casestudy => {
        res.json(casestudy)
    }).catch(error => {
        res.json({
            message: `The Case Study Doesn't Exist`
        })
    })
})


casestudyRouter.post('/save', uploadCaseStudy.single('image'),async (req, res) => {
    const decodedToken = jwt.verify(getTokenFrom(req), config.JWTSECRET);
    if (!decodedToken.id) {
        return res.status(401).json({ error: 'token invalid' });
    }

    const { id, title, content, description, image } = req.body;

    const uploadedImage = req?.file?.filename

    // Optional: Add validation logic here for the request body.

    try {
        let casestudy;
        if (id) {
            const avatarNotUpdated = typeof image === 'string'

            // Update existing casestudy
            casestudy = await CaseStudy.findById(id);
            if (!casestudy) {
                return res.status(404).json({ error: 'Artist not found' });
            }
            casestudy.title = title;
            casestudy.description = description;
            casestudy.content = content;
            casestudy.image = image;
            if(avatarNotUpdated){
                casestudy.image = image
            }
            else{
                casestudy.image = uploadedImage
            }
            // Update artworks logic here, if necessary.
        } else {
            // Create new casestudy
            casestudy = new CaseStudy({ title, description, content, image:uploadedImage });
        }

        const savedArtist = await casestudy.save();

        // Optional: Update artworks relationship here, if necessary.

        logger.info('CaseStudy saved');
        res.json(savedArtist);
    } catch (err) {
        logger.error('Error saving casestudy', err);
        res.status(500).json(err);
    }
});


casestudyRouter.delete('/delete', verifyTokenMiddleware, async (req, res) => {
    const { id } = req.body
    try {
        // const result = await CaseStudy.deleteOne({ _id: id }); // Assuming _id is the correct field
        // await Artwork.deleteMany({ artist: id });
        // if (result.deletedCount === 0) {
        //     return res.status(404).send('No artist found with that ID');
        // }
        // res.send('Artist deleted successfully');

        const casestudy = await CaseStudy.findById(id);
    
        if (!casestudy) {
          return res.status(404).json({ message: "Case study not found" });
        }
    
        // Delete associated artworks
        await CaseStudy.deleteOne({ _id: id })
    
        res.json({ message: "Case study deleted successfully" });
    } catch (error) {
        console.error("Error deleting case study: ", error); // Example of logging the error
        res.status(500).send(error.message);
    }
});


module.exports = casestudyRouter 