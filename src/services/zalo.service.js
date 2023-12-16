const jwt = require("jsonwebtoken");
const { axiosReq } = require("./request");
const axios = require('axios');

const API_DOMAIN = "https://graph.zalo.me";
const OPEN_API_DOMAIN = "https://openapi.zalo.me";

const getZaloProfile = async (accessToken) => {
  try {
    const fields = "id,name,picture";
    const data = await axiosReq.get(`${API_DOMAIN}/v2.0/me?${fields}`, {
      headers: {
        "Content-Type": "application/json",
        access_token: accessToken,
      },
    });

    return data.data;
  } catch (error) {}
};



const sendNotification = async (userID) =>{
 

  try {
    const apiKey  = process.env.API_KEY
    const receiverId = userID;
    const miniAppId =  process.env.MINI_APP_ID
  
    const url = "https://openapi.mini.zalo.me/notification/template";
  
    const data = {
      templateId: "00126fd75392bacce383",
      templateData: {
        buttonText: "Xem chi tiết",
        buttonUrl: "https://hungtran.dev/api-documents",
        title: "Yoko Spa - Cám ơn bạn đã lên lịch",
        contentTitle: "Cám ơn bạn đã lên lịch",
        contentDescription:
          "Chúng tôi đã nhận yêu cầu đặt lịch  từ bạn. Chúc bạn có một trải nghiệm tuyệt vời sắp tới"
      }
    };
  

    const headers = {
      "X-Api-Key": `Bearer ${apiKey}`,
      "X-User-Id": receiverId,
      "X-MiniApp-Id": miniAppId,
      "Content-Type": "application/json"
    };

    const req = await axios.post(url,{data}, {headers})

  } catch (error) {
    res.status(500).json({
      message: "zalo ngu"
    })
  }



}








module.exports = {
  getZaloProfile,
  sendNotification
};


