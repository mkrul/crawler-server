const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    listed_date: { type: String, required: true },
    created_at: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true },
  },
  { versionKey: false },
  { timestamps: false },
)

module.exports = mongoose.model('listing', Listing)
