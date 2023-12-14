const Voucher = require('../models/voucher.model');

// Get all vouchers
const getAllVouchers = async (req, res) => {
    try {
        const vouchers = await Voucher.find({});
        res.json({
            status: true,
            message: "Lấy tất cả mã giảm giá thành công",
            data: vouchers
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Lỗi khi lấy mã giảm giá",
            error: error.message
        });
    }
}

// Create voucher
const createVoucher = async (req, res) => {
    try {
        const { code, discountPercentage, expirationDate } = req.body;

        // Validate required fields
        if (!code || !discountPercentage || !expirationDate) {
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            });
        }

        const newVoucher = new Voucher({
            code,
            discountPercentage,
            expirationDate
        });

        const savedVoucher = await newVoucher.save();
        res.json({
            status: true,
            message: "Tạo mã giảm giá thành công",
            data: savedVoucher
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Lỗi khi tạo mã giảm giá",
            error: error.message
        });
    }
}

// Edit voucher
const editVoucher = async (req, res) => {
    try {
        const { code, discountPercentage, expirationDate } = req.body;
        const voucherId = req.params.id;

        // Validate required fields
        if (!code || !discountPercentage || !expirationDate) {
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            });
        }

        const updatedVoucher = await Voucher.findByIdAndUpdate(
            voucherId,
            {
                code,
                discountPercentage,
                expirationDate
            },
            { new: true }
        );

        if (!updatedVoucher) {
            return res.status(404).json({
                status: false,
                message: "Mã giảm giá không tồn tại"
            });
        }

        res.json({
            status: true,
            message: "Mã giảm giá đã được cập nhật thành công",
            data: updatedVoucher
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Lỗi khi cập nhật mã giảm giá",
            error: error.message
        });
    }
}

// Delete voucher
const deleteVoucher = async (req, res) => {
    try {
        const voucherId = req.params.id;

        const deletedVoucher = await Voucher.findByIdAndDelete(voucherId);

        if (!deletedVoucher) {
            return res.status(404).json({
                status: false,
                message: "Mã giảm giá không tồn tại"
            });
        }

        res.json({
            status: true,
            message: "Mã giảm giá đã được xóa thành công",
            data: deletedVoucher
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Lỗi khi xóa mã giảm giá",
            error: error.message
        });
    }
}

module.exports = {
    getAllVouchers,
    createVoucher,
    editVoucher,
    deleteVoucher
}
