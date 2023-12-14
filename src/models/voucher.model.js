const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const voucherSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
      },
      discountPercentage: {
        type: Number,
        required: true,
      },
      expirationDate: {
        type: Date,
        required: true,
      },
      // Các trường khác có thể thêm vào theo nhu cầu của bạn
    });
    
    // Tạo model từ schema
    const Voucher = mongoose.model('Voucher', voucherSchema);
    
    // Xuất model để sử dụng trong các module khác
    module.exports = Voucher;