// Verify Blacklisted Token
const BlacklistedToken = require('../models/blacklistedToken')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const isTokenBlacklisted = async (token) => {
    const tokenInBlacklist = await BlacklistedToken.findOne({ token });
    return !!tokenInBlacklist;
};

// Example of using it in a middleware
const verifyTokenMiddleware = async (req, res, next) => {
    const token = getTokenFrom(req); // Removed res as it's unnecessary here
    if (!token) {
        return res.status(401).json({ error: 'Token is invalid' });
    }
    const isBlacklisted = await isTokenBlacklisted(token);

    if (isBlacklisted) {
        return res.status(401).json({ error: 'Token is invalid' });
    }

    try {
        const decodedToken = jwt.verify(token, config.JWTSECRET);
        req.user = decodedToken;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};
    
const getTokenFrom = (request, response) => {
    const authorization = request.get('authorization');
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '');
    }
    return null;
}

module.exports = { getTokenFrom, verifyTokenMiddleware } 