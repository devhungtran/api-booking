const { SettingModel } = require("../models/setting.model")









const getSetting =  async(req,res) =>{
    try {   
        

       

        const getSetting = await SettingModel.find({})

        res.status(200).json({
            status: true,
            message:  "get data sucesssfully",
            data: getSetting
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message:  "get data failed",
            
        })
    }
}


const updateSetting = async (req, res) => {
    try {
        const { app_name, banner, facebook_url, email_contact, phone_contact } = req.body;
        const getSetting = await SettingModel.findOne({}); 
        const newUpdate = {
            app_name: app_name ?? getSetting.app_name,
            banner: banner ?? getSetting.banner,
            facebook_url: facebook_url ?? getSetting.facebook_url,
            email_contact: email_contact ?? getSetting.email_contact,
            phone_contact: phone_contact ?? getSetting.phone_contact
        };

        const update = await SettingModel.findOneAndUpdate({}, newUpdate, { new: true });

        if (!update) {
            res.status(500).json({
                status: false,
                message: "Update failed !!!"
            });
            return;
        }

        res.status(200).json({
            status: true,
            message: "Update successfully !!!",
            data: update
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Update failed"
        });
    }
};




module.exports = {
    getSetting, updateSetting
}

