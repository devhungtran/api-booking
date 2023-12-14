const { NotificationModel } = require("../models/notification.model");
const uploadFile = require("../services/fileUpload");


const getNotification = async( req,res) =>{
    try {
        const data = await NotificationModel.find({})
        const notification = data[data.length - 1];

        res.status(200).json({
            status: false,
            message: "Get popup notification sucessfully",
            notification: notification
        })

    } catch (error) {
        console.log(error);
    }
}


const createNewNotification = async (req, res) => {
  try {
    const { title, content, file } = req.body;

    
    
    if (!file) {
      return res.status(400).json({ message: 'No image uploaded.' });
    }

    const imageUrl = await uploadFile(file);


    console.log('Notification created with image:', imageUrl);

    return res.status(200).json({ message: 'Notification created successfully.', imageUrl });
  } catch (error) {
    console.error('Error creating notification:', error);
    return res.status(500).json({ message: 'Server error creating notification.' });
  }
};



module.exports = {getNotification,createNewNotification}