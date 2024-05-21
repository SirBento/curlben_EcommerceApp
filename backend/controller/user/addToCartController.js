const addToCartModel = require("../../models/cartProduct")

// user adding product to cart
const addToCartController = async(req,res)=>{
    try{
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await addToCartModel.findOne({ productId })

        console.log("isProductAvailable   ",isProductAvailable)

     //Check if the product to be saved already exist
        if(isProductAvailable){
            return res.json({
                message : "Product Already Exits In The Cart",
                success : false,
                error : true
            })
        }

        const payload  = {
            productId : productId,
            quantity : 1,
            userId : currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()


        return res.json({
            data : saveProduct,
            message : "Product Added To Cart",
            success : true,
            error : false
        })
        

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}


module.exports = addToCartController