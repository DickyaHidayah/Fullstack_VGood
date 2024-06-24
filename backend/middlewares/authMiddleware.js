const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        console.log('Authorization denied: No token provided');
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Token is not valid:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};
