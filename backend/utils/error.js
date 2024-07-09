const logger = require('./logger')

const handleError = (res, message, err) => {
    logger.error(message, err);
    res.status(500).json({ error: message });
};


module.exports = {handleError}