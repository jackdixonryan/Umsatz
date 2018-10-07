const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  tables: {
    type: Schema.Types.ObjectId,
    ref: 'Table'
  }
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant;