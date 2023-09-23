const express = require('express');
const {
  getAllOrders,
  getCurrentUserOrders,
  updateOrder,
  createOrder,
  getSingleOrder,
  deleteOrder,
} = require('../controllers/orderController');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const router = express.Router();

router
  .route('/')
  .get([authenticateUser, authorizePermissions('admin')], getAllOrders)
  .post(authenticateUser, createOrder);

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);

router
  .route('/:id')
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder)
  .delete(authenticateUser,deleteOrder)

module.exports = router;
