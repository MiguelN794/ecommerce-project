const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send('Error getting products');
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const newProduct = new Product({ name, description, price, stock });
        await newProduct.save();
        res.status(201).send('Product created');
    } catch (error) {
        res.status(500).send('Error creating product');
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price, stock }, { new: true });
        res.status(200).send('Product updated');
    } catch (error) {
        res.status(500).send('Error updating product');
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).send('Product deleted');
    } catch (error) {
        res.status(500).send('Error deleting product');
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};
