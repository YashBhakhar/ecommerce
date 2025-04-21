const express = require('express');
const { check } = require('express-validator');
const { addToCart, getCart, updateCartItem, removeCartItem } = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Add product to cart
router.post(
  '/',
  [
    protect,
    [
      check('productId', 'Product ID is required').not().isEmpty(),
      check('quantity', 'Quantity must be at least 1').isInt({ min: 1 })
    ]
  ],
  addToCart
);

// Get user cart
router.get('/', protect, getCart);

// Update cart item
router.put(
  '/:productId',
  [
    protect,
    [
      check('quantity', 'Quantity must be at least 1').isInt({ min: 1 })
    ]
  ],
  updateCartItem
);

// Remove product from cart
router.delete('/:productId', protect, removeCartItem);

module.exports = router;