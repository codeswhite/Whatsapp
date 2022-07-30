const express = require('express')
const router = express.Router()

router.post('/sendMessage', (req, res) => {
    console.log('It activated')
})

module.exports = router
