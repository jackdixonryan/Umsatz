const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partySchema = new Schema({
  guestName: {
    type: String,
    required: true
  },
  partySize: {
    type: Number,
    required: true
  },
  orders: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }
});