const db = require('../models');

module.exports = {
  viewTables: (req, res) => {
    db.Restaurant
      .find({})
      .populate('tables')
      .then(dataRes => res.json(dataRes))
      .catch(err => console.error(err));
  },
  addTable: (req, res) => {
    db.Table
      .create({
        seatingMin: req.body.seatingMin,
        seatingMax: req.body.seatingMax,
        Occupied: req.body.occupied
      })
      .then(dbRes => {
        return db.Restaurant.findOneAndUpdate({}, { $push: { tables: dbRes._id } }, { new: true });
      })
      .then(dbRes => {
        res.json(dbRes);
      })
      .catch(err => console.error(err));
  },
  addRestaurant: (req, res) => {
    db.Restaurant
      .create({
        name: req.body.name
      })
      .then(dbCallback => res.json(dbCallback))
      .catch(err => console.error(err));
  }
}