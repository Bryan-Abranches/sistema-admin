const express = require('express')
const IndexController = require('../controllers/IndexController')

const router = express.Router()

router.get('/home', IndexController.showIndex)
router.get('/login', IndexController.showLogin)

module.exports = router