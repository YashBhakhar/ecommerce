const express = require('express');
const { check } = require('express-validator');
const { createOrder, getUserOrders, getOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Create new order
router.post(
  '/',
  [
    protect,
    [
      check('shippingAddress.address', 'Address is required').not().isEmpty(),
      check('shippingAddress.city', 'City is required').not().isEmpty(),
      check('shippingAddress.postalCode', 'Postal code is required').not().isEmpty(),
      check('shippingAddress.country', 'Country is required').not().isEmpty(),
      check('paymentMethod', 'Payment method is required').isIn(['case', 'check'])
    ]
  ],
  createOrder
);

// Get user orders
router.get('/', protect, getUserOrders);

// Get single order
router.get('/:id', protect, getOrder);

module.exports = router;