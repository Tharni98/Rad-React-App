// const {productsList} = require("../constants/const");
const Product=require('../model/product');

const ProductController ={
    getAllProducts: async function(req, res, next) {
        console.log("awa")
        try {
            const productList = await Product.find();
            res.status(200).json(productList)

        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went wrong'});
        }
    },
    saveProduct: async function (req,res,next) {
        //console.log("awa save")
        try {
            const productData = req.body;
            const product = await Product.create(productData);
            console.log(productData);
            res.status(200).json(product);
        } catch (err){
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong !'})
        }

    },
    getProduct: async function (req,res,next) {
        try {
            const productId = req.param.id;
            const product =await Product.find({id:productId});

            res.status(200).json(product);
        } catch (err){
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong !'})
        }
    },
    updateProducts: function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;

            const updatedProducts = Product.findOneAndUpdate({
                    id: productId
                }, productData,
                {new: true});

            if(!updatedProducts){
                return res.status(404).json({error: 'Product Not Found'});
            }

            res.status(200).json(updatedProducts)

        }catch (err){
            console.log("Error ", err);
            res.status(500).json({ error: "Something went wrong" });
        }

    },

    deleteProduct:async function (req, res, next) {
        try {
            const productId = req.params.id;

            //genna ganna id eken product 1 through delete one
            const result = await Product.deleteOne({id: productId});

            //apu result eke deleted count eka ganna ahki
            if(result.deletedCount == 0){
                return res.status(404).json({error:'Product Not Found!'})
            }

            //delete una eka successfull nam
            res.status(200).json('Product Deleted Successfully')

        }catch (err){
            console.error(err);
            res.status(500).json({error : 'Something went wrong'});
        }
    }
}
module.exports = ProductController;