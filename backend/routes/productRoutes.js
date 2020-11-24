import express from 'express'
import Product from '../models/productModel.js'
import expressHandler from 'express-async-handler'
const router = express.Router()

// @desc    fetch all product
// @route   Get
// @access  public

router.get('/', expressHandler(async (req, res) => {

    const products =  await Product.find({})

    res.json(products);
}));


// @desc    fetch sigle product
// @route   Get
// @access  public

router.get('/:id', expressHandler(async (req, res) => {
    
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404).json({ message : 'Product Not Found'})
    }

}));


export default router