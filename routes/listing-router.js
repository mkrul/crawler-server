const express = require('express')

const ListingController = require('../controllers/listing-controller')

const router = express.Router()

router.get('/listings', ListingController.getListings)

module.exports = router
