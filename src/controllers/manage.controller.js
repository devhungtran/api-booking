
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { AdminModel } = require('../models/admin.model');




const generateAccessToken = async (user) => {
    try {
        const key = process.env.ACCESS_ADMIN_SECRET;
        const expiresIn = "30d"
        const token =  jwt.sign({
            email: user.email,
            role: user.role
        }, key, { expiresIn: expiresIn });

        return token


        
    } catch (error) {
        // Handle error
    }
}

const generateRefreshToken = async (user) =>{
    try {
        const key = process.env.ACCESS_ADMIN_SECRET
        const expiresIn = "30d"
        jwt.sign({
           
            username: user.username,
            emaiil  : user.email,
            role: user.role
            
        },
        {key, expiresIn: "100d"}
        )
    } catch (error) {
        
    }
}



const manageAuth = async (req,res) =>{
    try {
         const email = req.body.email;
         const password = req.body.password;
            
         if(!email){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập emnail"
                }
            )
            return
        }
        if(!password){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập mật khẩu    "
                }
            )
            return
        }

        const admin = await AdminModel.findOne({
            email: email
        });
        
        if(!admin){
            res.status(500).json(
                {
                    status: true,
                    message: "Email không tồn tại !!!",
                   
                }
            )   
            return
        }

        const passwordHash = admin.password
        const isPassword = await bcrypt.compare(password, passwordHash);
        if(isPassword){
            const accessToken = await generateAccessToken(admin);
            const refreshToken = await generateRefreshToken(admin);
            res.status(200).json(
                {
                    status: true,
                    message: "Đăng nhập thành công !!!",
                    token: accessToken,
                    data: admin
                }
            )   

        }else{
            res.status(500).json(
                {
                    status: false,
                    message: "Mật khẩu không chính xác !!!",
                   
                }
            )   
            return
        }



    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                status: false,
                message: "Lỗi server",
            }
        )   
    }
}



module.exports = {
    manageAuth
}