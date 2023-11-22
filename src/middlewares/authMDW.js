const { config } = require('dotenv');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.model');





const authMDW = async (req,res,next) =>{
    try {
        let authorization = req.headers['authorization']

        if(!authorization){
            res.status(500).json({
                status: false,
                message: "Không tìm thấy authorization"
            })
            return
        }
        const token = authorization.substring(7)

        const data = jwt.verify(authToken, config().parsed.JWT_SECRET);
        
        const user = await UserModel.findOne({
            id: data.id
        });

        if(!user){
            res.status(500).json({
                status: false,
                message: "Tài khoản không tồn tại"
            })
            return
        }

        req.user = user
        return next()

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server lỗi"
        })
        return
    }
}


module.exports = {
    authMDW
}