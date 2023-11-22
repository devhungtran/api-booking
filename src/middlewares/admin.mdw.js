

const jwt = require('jsonwebtoken')




const checkAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorized;

      if (!token) {
        return res.status(401).json({ message: 'Vui lòng đăng nhập' });
      }
      const authorization = token.split(' ')[1];

      const decoded = jwt.verify(authorization, process.env.ACCESS_ADMIN_SECRET);
      req.user = decoded;



      

      next();
  
      } catch (error) { 
          res.status(500).json({ message: 'Token khong chinh xac' });
      }
  }
  
  
  

  module.exports = {checkAdmin}