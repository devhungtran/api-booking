const jwt = require("jsonwebtoken");
const { axiosReq } = require("./request");

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
``;

module.exports = {
  getZaloProfile,
};
