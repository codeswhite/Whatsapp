const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config();
router.post('/login', (req, res) => {
    console.log(req.body)
    let username = req.body.username
    let password = req.body.password
    //verify if username and password match db
    if (true) {
        //get user id from db
        var token = jwt.sign({ id: "userId" },
            process.env.RSA_PRIVATE_KEY,
            {expiresIn: 7200}) //expires in 2 hours
            res.status(200).send({auth: true, token: token})
    }
})

module.exports = router
