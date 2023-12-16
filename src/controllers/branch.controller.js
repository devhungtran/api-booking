const { branchModel } = require("../models/branch.model")


 







// get all chi nhánh
const getAllBranch = async (req,res) =>{
    try {
        
        const data = await branchModel.find({})
        res.status(200).json({
            status: true,
            message: "get all branch success !!!",
            data: data
        })
    } catch (error) {
        console.log(error);
    }
}




// get all chi nhánh
const getBranchByCode = async (req,res) =>{
    try {
        
        const branch_code = req.body || req.parmas
        const data = await branchModel.find({
            branch_code: branch_code
        })
        res.status(200).json({
            status: true,
            message: "get  branch success !!!",
            data: data
        })
    } catch (error) {
        console.log(error);
    }
}

// get chi nhánh theo tỉnh thành


// tạo thêm chi nhánh

const createBranch =  async(req,res) =>{
    try {
        
        const {branch_code, branch_name, image,inProvine, location } = req.body

        if(!branch_code){
            res.status(500).json({
                status: false,
                message: "Vui lòng nhập mã chi nhánh"
            })
            return
        }
        if(!branch_name){
            res.status(500).json({
                status: false,
                message: "Vui lòng nhập tên chi nhánh"
            })
            return
        }
        if(!inProvine){
            res.status(500).json({
                status: false,
                message: "Vui lòng nhập tỉnh thành chi nhánh"
            })
            return
        }
        if(!location){
            res.status(500).json({
                status: false,
                message: "Vui lòng nhập địa chỉ tọa độ"
            })
            return
        }

        const newBranch = await branchModel.create({
            branch_code: branch_code,
            branch_name: branch_name,
            inProvine: inProvine,
            image: image,
            location: location
        })
   
 
        res.status(500).json({
            status: false,
            message: "Đã sảy ra lỗi"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Đã sảy ra lỗi"
        })
    }
}




const deleteBranch    = async (req,res) =>{
    try {
        const {branch_code}   = req.parmas || req.body
        const del  = await branchModel.findOneAndDelete({branch_code: branch_code})
        if(!del){
            res.status(500).json({
                status: false,
                message: "Đã sảy ra lỗi"
            })
        }

        res.status(200).json({
            status: true,
            message: "Xóa thành công"
        })


    } catch (error) { 
        res.status(500).json({
            status: false,
            message: "Đã sảy ra lỗi"
        })
    }
}






module.exports = {
    getAllBranch,createBranch,deleteBranch,getBranchByCode

}