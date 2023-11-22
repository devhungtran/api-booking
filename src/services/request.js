const axios = require('axios');

const axiosReq = axios.create({
    baseURL: "https://graph.zalo.me/v2.0/",
});

const get = async (path, options = {}) => {
    const response = await axiosReq.get(path, options);
    return response.data;
};

const post = async (path, options = {}) => {
    const response = await axiosReq.post(path, options);
    return response.data;
};

const put = async (path, options = {}) => {
    const response = await axiosReq.put(path, options);
    return response.data;
};

module.exports = {
    axiosReq,
    get,
    post,
    put,
};
