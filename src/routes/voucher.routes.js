const express = require('express')
const { getAllVouchers, createVoucher, editVoucher,deleteVoucher } = require('../controllers/voucher.controller')

const   voucherRoutes  = express.Router()


voucherRoutes.get('/get', getAllVouchers);

// Thêm mã giảm giá mới
voucherRoutes.post('/create', createVoucher);

// Chỉnh sửa thông tin mã giảm giá
voucherRoutes.put('/edit', editVoucher);

// Xóa mã giảm giá
voucherRoutes.delete('/delete', deleteVoucher);








module.exports = {
    voucherRoutes
}
