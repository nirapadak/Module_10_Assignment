const { Product } = require("../model/productModel");

// product create controller ------------------
exports.createProduct = async(req,res)=>{
    try {
        const {name,price,description,createdAt} = req.body;
        const productData = await new Product(
            {
                name,price,description,createdAt
            }
        ).save();
        res.status(200).json(
            {
                success: true,
                message:"Product create done",
                Data: productData
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};

//all products get ---------------
exports.getProduct = async(req, res) => {
  try {
    const allProducts = await Product.find({}, 'name price');
    res.status(200).json({
      message: "product get successfully",
      success: true,
      Data: allProducts
    })
  } catch (error) {
    res.status(404).json({
      error: error.message
    })
  }
}