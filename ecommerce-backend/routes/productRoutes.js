const express = require('express');
const { check } = require('express-validator');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Get all products
router.get('/', getProducts);

// Get single product
router.get('/:id', getProduct);

// Create a product
router.post(
  '/',
  [
    protect,
    authorize('admin'),
    [
      check('name', 'Name is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('price', 'Price must be a positive number').isFloat({ min: 0 }),
      check('imageUrl', 'Image URL is required').not().isEmpty(),
      check('stock', 'Stock must be a positive number').isInt({ min: 0 })
    ]
  ],
  createProduct
);

// Update a product
router.put(
  '/:id',
  [
    protect,
    authorize('admin'),
    [
      check('price', 'Price must be a positive number').optional().isFloat({ min: 0 }),
      check('stock', 'Stock must be a positive number').optional().isInt({ min: 0 })
    ]
  ],
  updateProduct
);

// Delete a product
router.delete('/:id', [protect, authorize('admin')], deleteProduct);

module.exports = router;