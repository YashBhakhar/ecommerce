const express = require('express');
const { check } = require('express-validator');
const { addToWishlist, getWishlist, removeFromWishlist } = require('../controllers/wishlistController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Add product to wishlist
router.post(
  '/',
  [
    protect,
    [
      check('productId', 'Product ID is required').not().isEmpty()
    ]
  ],
  addToWishlist
);

// Get user wishlist
router.get('/', protect, getWishlist);

// Remove product from wishlist
router.delete('/:productId', protect, removeFromWishlist);

module.exports = router;