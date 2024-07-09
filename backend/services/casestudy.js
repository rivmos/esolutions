const CaseStudy = require('../models/casestudy');

const saveOrUpdateCaseStudy = async ({ id, title, content, description, image, uploadedImage }) => {
    let casestudy;
    if (id) {
        casestudy = await CaseStudy.findById(id);
        if (!casestudy) {
            throw new Error('Case study not found');
        }

        // Update existing case study
        casestudy.title = title;
        casestudy.description = description;
        casestudy.content = content;
        casestudy.image = uploadedImage || image;
    } else {
        // Create new case study
        casestudy = new CaseStudy({
            title,
            description,
            content,
            image: uploadedImage,
        });
    }

    return await casestudy.save();
};

module.exports = {
    saveOrUpdateCaseStudy,
};
