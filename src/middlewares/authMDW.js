const { config } = require('dotenv');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.model');




const authMDW = async (req,res,next) =>{
    try {
        let authorization = req.headers['authorized']

        if(!authorization){
            res.status(500).json({
                status: false,
                message: "Không tìm thấy authorization"
            })
            return
        }

        const data =  jwt.verify(authorization, config().parsed.JWT_SECRET);


        const user = await UserModel.findOne({
            zaloID: data.zaloID
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
            message: "Tài khoản không tồn tại"
        })
        return
    }
}


module.exports = {
    authMDW
}