const { config } = require("dotenv");
const { UserModel } = require("../models/user.model");
const { getZaloProfile } = require("../services/zalo.service");




const generateAccessToken =  async(user) =>{
    try {
        
        const token = await jwt.sign({
            zaloID : zaloId,
        }, config().parsed.JWT_SECRET)
        return token
    } catch (error) {
        
    }
}




const SignInWidthZalo =  async(req,res) =>{
    try {
        const accessToken = req.body.accessToken;
        
        const { id, birthday, name, gender, picture } = await getZaloProfile()
        const avatar = picture
        if (picture.data) {
			avatar = picture.data.url
		}
        let birthDate = null
		if (birthday) {
			const parts = birthday.split('/')
			birthDate = new Date(parts[2], parts[1] - 1, parts[0])
		}


        let user = await UserModel.updateOne({ zaloId: id }, {
			birthday: birthDate,
			name,
			gender,
			avatar: avatar
		}, { upsert: true });
        if(!user){
            res.status(500).json({
                stauts: false,
                message: "Server err",
            })
        }

        generateAccessToken(user)   
        res.status(200).json({
            stauts: true,
            message: "Login Sucess",
            data: user,
            token: jwt
        })


        
    } catch (error) {
        res.status(500).json({
            stauts: false,
            message: "Server err",
        })
    }
}


module.exports = {SignInWidthZalo}