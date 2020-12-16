const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('../users/users-model')
const verifyCredentials = require('../users/verify-credentials')

router.post('/register', (req, res) => {
    const credentials = req.body
    if (verifyCredentials(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8
        const hash = bcryptjs.hashSync(credentials.password, rounds)

        credentials.password = hash

        Users.add(credentials)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err.message )
            })
    } else {
        res.status(400).json({ message: 'Registration failed' })
    }
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    
})

function makeToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }
    const options = {
        expiresIn: '900s'
    }
    return jwt.sign(payload, 'sterling', options)
}


module.exports = router