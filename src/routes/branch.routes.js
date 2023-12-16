
const express = require('express')
const { getAllBranch, createBranch, deleteBranch, getBranchByCode } = require('../controllers/branch.controller')

const branchRoutes  = express.Router()







/**
 * @swagger
 * components:
 *   schemas:
 *     branch:
 *       type: object
 *       required:
 *         - code_branch
 *         - name_branch
 *       properties:
 *         branch_code:
 *           type: string
 *           description: Mã chi nhánh
 *         branch_name:
 *           type: string
 *           description: Tên chi nhánh
 *         inProvine:
 *           type: string
 *           description:  Tỉnh thành
 *         location:
 *           type: string
 *           description: Địa chỉ google map
 *         create_date:
 *           type: date
 *           description: Ngày
 *       example:
 *         branch_code: THUDUC001
 *         branch_name: 586 Kha Vạn Cân, Linh Đông, Thủ Đức, TP. HCM
 *         inProvine: TP. Hồ Chí Minh
 *         location: 586 Kha Vạn Cân, Linh Đông, Thủ Đức, TP. HCM
 */

/**
 * @swagger
 * tags:
 *   name: branchs
 *   description: API quản lý chi nhánh
 */

/**
 * @swagger
 * /branch/get:
 *   get:
 *     summary: Trả về tất cả chi nhánh
 *     tags: [branchs] 
 *     responses:
 *       200:
 *         description: The list of branchs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/branch'
 */
branchRoutes.get('/get', getAllBranch)



/**
 * @swagger
 * /branch/create:
 *   post:
 *     summary: Tạo chii nhánh  mới 
 *     tags: [branchs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/branch'
 *     responses:
 *       200:
 *         description: The branch was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/branch'
 *       500:
 *         description: Some server error
 */

branchRoutes.post('/create', createBranch);



/**
 * @swagger
 * /branch/get/{branch_Code}:
 *   get:
 *     summary: Xóa chi nhánh theo mã
 *     tags: [branchs]
 *     parameters:
 *       - in: path
 *         name: branch_Code
 *         schema:
 *           type: string
 *         required: true
 *         description: Mã dịch vụ
 * 
 *     responses:
 *       200:
 *         description: The service was deleted
 *       404:
 *         description: The service was not found
 */
branchRoutes.delete('get/:branch_code', getBranchByCode)


/**
 * @swagger
 * /branch/delete/{branch_Code}:
 *   delete:
 *     summary: Xóa chi nhánh theo mã
 *     tags: [branchs]
 *     parameters:
 *       - in: path
 *         name: branch_Code
 *         schema:
 *           type: string
 *         required: true
 *         description: Mã dịch vụ
 * 
 *     responses:
 *       200:
 *         description: The service was deleted
 *       404:
 *         description: The service was not found
 */
branchRoutes.delete('/delete/:branch_code', deleteBranch)

module.exports = {
    branchRoutes
}


