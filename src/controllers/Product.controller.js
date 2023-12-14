const express = require('express');

const Product = require('../models/product.model');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({
            status: true,
            Message: "Lấy tất cả sản phẩm thành công",
            data: products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            Message: "Lỗi khi lấy sản phẩm",
            error: error.message
        });
    }
}

// Create product
const createProduct = async (req, res) => {
    try {
        const { productName, description, price, category } = req.body;

        // Validate required fields
        if (!productName || !description || !price || !category) {
            return res.status(400).json({
                status: false,
                Message: "All fields are required"
            });
        }

        const newProduct = new Product({
            productName,
            description,
            price,
            category
        });

        const savedProduct = await newProduct.save();
        res.json({
            status: true,
            Message: "Tạo sản phẩm thành công",
            data: savedProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            Message: "Lỗi khi tạo sản phẩm",
            error: error.message
        });
    }
}

// Edit product
const editProduct = async (req, res) => {
    try {
        const { productName, description, price, category } = req.body;
        const productId = req.params.id; // Assuming you are passing the product ID in the URL params

        // Validate required fields
        if (!productName || !description || !price || !category) {
            return res.status(400).json({
                status: false,
                Message: "All fields are required"
            });
        }

        // Find and update the product
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                productName,
                description,
                price,
                category
            },
            { new: true } // This option ensures that the updated document is returned
        );

        if (!updatedProduct) {
            return res.status(404).json({
                status: false,
                Message: "Product not found"
            });
        }

        res.json({
            status: true, 
            Message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            Message: "Error updating product",
            error: error.message
        });
    }
}

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Assuming you are passing the product ID in the URL params

        // Find and delete the product
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({
                status: false,
                Message: "Product not found"
            });
        }

        res.json({
            status: true,
            Message: "Product deleted successfully",
            data: deletedProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            Message: "Error deleting product",
            error: error.message
        });
    }
}


    
module.exports = {
    getAllProducts,createProduct,editProduct,deleteProduct
}
