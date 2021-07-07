const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        res.status(401).json('no token supplied')
    } else {
        jwt.verify(token, 'sterling', (err, decoded) => {
            if (err) {
                res.status(401).json('no acceptable token supplied ' + err.message)
            } else {
                req.decodedToken = decoded
                next()
            }
        })
    }
}