const Listing = require('../models/listing-model')

getListings = async (req, res) => {
  console.log('in getListings')
  await Listing.find({}, (err, listings) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!listings.length) {
      return res
        .status(404)
        .json({ success: false, error: `Listing not found `})
    }
    console.log(listings)
    return res.status(200).json({ success: true, data: listings })
  }).catch(err => console.log(err))
}

module.exports = { getListings }
