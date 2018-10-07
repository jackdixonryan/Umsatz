const router = require('express').Router();
const controller = require('../../controllers/restaurantController');

router.route('/')
  .get(controller.viewTables)
  .post(controller.addRestaurant)

router.route('/tables-by-id/:id')
  .post(controller.addTable)

router.route('/restaurants')
  .post(controller.addRestaurant);

module.exports = router;