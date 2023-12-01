const { config } = require("dotenv");
const { UserModel } = require("../models/user.model");
const { getZaloProfile } = require("../services/zalo.service");
const jwt = require('jsonwebtoken')



const generateAccessToken = async (data) => {
    try {
      const token = await jwt.sign(
        { zaloID: data.id },
        process.env.JWT_SECRET
      );
      console.log(token);
      return token;
    } catch (error) {
      console.error('Error generating token:', error);
      throw error; // Rethrow the error to propagate it to the calling function.
    }
  };

const SignInWidthZalo =  async(req,res) =>{
    try {
        const accessToken = req.headers.access_token;

        if(!accessToken){
            res.status(500).json({
                stauts: false,
                message: "No Token",
        
            })
            return
        }
  

        const data = await getZaloProfile(accessToken)
        if(data.message != "Success"){
            res.status(500).json({
                stauts: false,
                message: "Token sai",
        
            })
            return
        }
        const jwToken =  await generateAccessToken(data);
    

        const createUser = await UserModel.updateOne(
            { zaloId: data.id },  // The filter criteria to find the document to update
            {
              birthday: "",
              name: data.name,
              gender: "",
              avatar: ""
            },  // The data to update or set in the document
            { upsert: true }  // An option to perform an upsert (insert if not exists) operation
          );


        if(!createUser){
            res.status(500).json({
                stauts: false,
                message: "Server err",
            })
        }

    

        res.status(200).json({
            stauts: true,
            message: "Login Sucess",
            data: data,
            jwt: jwToken
        })


        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            stauts: false,
            message: "Server err",
        })
    }
}


module.exports = {SignInWidthZalo}