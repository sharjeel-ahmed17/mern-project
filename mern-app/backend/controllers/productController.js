const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

const addProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        const newProduct = new Product({ name, price, description });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};


module.exports = {
    getProducts,
    addProduct
}