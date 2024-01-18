var express = require('express');
var router = express.Router();
const {productsList ,test} =require('../constants/const');
const ProductController =require('../controller/productController');

/* GET users listing. */
router.get('/all',ProductController.getAllProducts );
router.post('/save',ProductController.saveProduct);
router.get('/fine/:id',ProductController.getProduct) //localhost:4000/product/fine/1
router.put('/update:id',ProductController.updateProducts);
router.delete('/delete/:id' , ProductController.deleteProduct);

module.exports = router;
