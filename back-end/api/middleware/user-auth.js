const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'privateKey');
        req.userData = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Access Denied' });
    }
};
