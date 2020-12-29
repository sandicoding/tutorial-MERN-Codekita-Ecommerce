import express from 'express'

const router = express.Router()
import { getProductById, getProducts } from '../controllers/productController.js'

// @desc    fetch all product
// @route   Get
// @access  public

router.route('/').get(getProducts)


// @desc    fetch sigle product
// @route   Get
// @access  public

router.route('/:id').get(getProductById)


export default router