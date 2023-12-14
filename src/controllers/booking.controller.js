const { bookingModel } = require("../models/booking.model")
const { branchModel } = require("../models/branch.model")
const { ServiceModel } = require("../models/service.model")
const { UserModel } = require("../models/user.model")





const generateCodeBooking = () =>{
    const length = 8
    let code = ""
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        code += char.charAt(randomIndex);
    }

    return code
} 

const getAllBooking =  async(req,res) =>{
    try {
        const data = await bookingModel.find({})


        if(!data){
            res.status(500).json({
                status: false,
                message: "get all booking failed !!!",
            })
            return
        }


        res.status(200).json({
            status: true,
            message: "get all booking success !!!",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "get all booking failed !!!",
        })
    }
}



const cancelBooking = async (req,res) =>{
    try {
        const booking_code = req.params.booking_code  ||  req.body.booking_code  
        if(!booking_code){
            res.status(500).json({
                status: false,
                message: "Vui lòng nhập mã booking",
            })
            return
        }
        const update = {
            booking_status: "cancelled",
            update_date: Date.now
        }

        const cancel = await bookingModel.findOneAndUpdate(
            {
            booking_code: booking_code
            }, update, {new: true}
        )
            
        if(!cancel){
            res.status(500).json({
                status: false,
                message: "Huỷ thất bại.  Đã xảy ra lỗi",
            })
        }
        res.status(200).json({
            status: false,
            message: "Huỷ thành công. Bạn có thể đặt lịch mới.",
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server Err",
        })
    }
}







const findBookingByCode = async(req,res) =>{
    try {
        const booking_code = req.params.booking_code || req.body.booking_code 


        if(!booking_code){
            res.status(500).json({
                status: false,
                message: "Mã lịch không tồn tại",
            })
            return
        }

        const data = await bookingModel.findOne({
            booking_code: booking_code
        })

        if(!data){
            res.status(500).json({
                status: false,
                message: "get all booking failed !!!",
            })
            return
        }
       
        return res.status(200).json({
            status: true,
            message: `get booking by  booking code ${booking_code} successfully`,
            data: data
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            message: "get all booking failed !!!",
        })
    }
}





const findBookingByUser = async(req,res) =>{
    try {
        const zaloID = req.user.zaloID
        


        
        const data = await bookingModel.findOne({
            zaloID: zaloID
        })

        if(!data){
            res.status(500).json({
                status: false,
                message: "get all booking failed !!!",
            })
            return
        }
       
        return res.status(200).json({
            status: true,
            message: `get booking by  booking code ${booking_code} successfully`,
            data: data
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            message: "get all booking failed !!!",
        })
    }
}



const findBookingByStatus =  async(req,res) =>{
    try {
        
        const booking_status = req.params.booking_status || req.body.booking_status 


        if(!booking_status){
            res.status(500).json({
                status: false,
                message: "Trạng thai không tồn tại",
            })
            return
        }
        if(!booking_status == "wating" ||    !booking_status == "cancelled" ){
            res.status(500).json({
                status: false,
                message: "Trạng thái chỉ là wating hoặc cancelled",
            })
            return
        }
        
        
        const data = await bookingModel.find({
            booking_status: booking_status
        })

        if(!data){
            res.status(500).json({
                status: false,
                message: "Không tồn tại dữ liệu",
            })
            return
        }
        return res.status(200).json({
            status: true,
            message: "get all booking success !!!",
            data: data
        })

       
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "get all booking failed !!!",
        })
    }
}



const createBooking =  async(req,res) =>{
    try {
        
        const {code_service,branch_code,booking_time } =  req.body
        const booking_status = "waiting"
        const booking_code = generateCodeBooking()

        if(!code_service){
            res.status(500).json({
                status: false,
                message: "Vui lòng chọn dịch vụ",
            })
            return
        }
        if(!branch_code){
            res.status(500).json({
                status: false,
                message: "Vui lòng chọn chi nhánh",
            })
            return
        }

        if(!booking_time){
            res.status(500).json({
                status: false,
                message: "Vui lòng chọn ngày giờ",
            })
            return
        }


        const checkBranch = await branchModel.findOne({
            branch_code: branch_code
        })  


        


        if(!checkBranch){
            res.status(500).json({
                status: false,
                message: "Chi nhánh không hợp lệ",
            })
            return
        }

        const isDate = (booking_time) =>{
            const dateTime = new Date(booking_time);
            return !isNaN(dateTime.getTime());
    }


        const checkDate = isDate(booking_time)
        if(!checkDate){
            res.status(500).json({
                status: false,
                message: "Ngày giờ không hợp lệ",
            })
            return
        }


       
        const book =  await bookingModel.create({
            booking_user:  req.user.zaloID,
            booking_code: booking_code,
            code_service: code_service,
            booking_time: booking_time,
            booking_status: booking_status
        })
  
        if(!book){ 
            res.status(500).json({
                status: false,
                message: "Đặt lịch thất baiij",
            })
            return 
        }
        return res.status(200).json({
            status: true,
            message: "Đặt lịch thành công",
            data: book
        })

        


        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Đặt lịch thất bại. Lỗi server !!!",
        })
    }
}











module.exports = {
    getAllBooking,
    cancelBooking,
    findBookingByStatus,
    findBookingByCode,
    createBooking,
    findBookingByUser
}