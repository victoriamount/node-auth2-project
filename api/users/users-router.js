const express = require('express')
const router = express.Router()

const Users = require('./users-model')
// const verifyDepartment = require('../middlewares/verify-department')
// ^^^ For stretch
const verifyToken = require('../middlewares/verify-token')


router.get('/', verifyToken, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.json('An error occured: ' + err.message)
        })
})

module.exports = router