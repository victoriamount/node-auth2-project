module.exports = (department) => (req, res, next) => {
    if (req.decodedToken.department === department) {
        next()
    } else {
        res.status(403).json(`${department} does not have access to this information`)
    }
}

// potential departments: 
// sales
// finance
// IT