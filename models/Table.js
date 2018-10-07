const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = Schema({
  seatingMin: {
    type: Number,
    required: true
  },
  seatingMax: {
    type: Number
  },
  occupied: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;