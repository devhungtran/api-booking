const express = require('express');
const { getAllService, createService, findServiceByCode, deleteService, editService } = require('../controllers/service.controller');
const serviceRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     service:
 *       type: object
 *       required:
 *         - code_service
 *         - name_service
 *       properties:
 *         code_service:
 *           type: string
 *           description: Mã dịch vụ
 *         name_service:
 *           type: string
 *           description: Tên dịch vụ
 *         price:
 *           type: number
 *           description: Giá dịch vụ
 *         img:
 *           type: string
 *           description: Đường dẫn hình ảnh
 *         description:
 *           type: string
 *           description: Mô tả dịch vụ
 *       example:
 *         code_service: TM001
 *         name_service: Trị mụn thâm nám
 *         price: 99000
 *         img: /upload/img/img-tm001.png
 *         description: Tri tham nam tren mun voi lieu trinh vo cung an toan cung voi spa beauty
 */

/**
 * @swagger
 * tags:
 *   name: services
 *   description: API của dịch vụ
 */

/**
 * @swagger
 * /service/get-all:
 *   get:
 *     summary: Trả về tất cả dịch vụ
 *     tags: [services] 
 *     responses:
 *       200:
 *         description: The list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/service'
 */

serviceRoutes.get('/get-all', getAllService);





/**
 * @swagger
 * /service/get/{code_service}:
 *   get:
 *     summary: Lấy dịch vụ theo mã dịch vụ
 *     tags: [services]
 *     parameters:
 *       - in: path
 *         name: code_service
 *         schema:
 *           type: string
 *         required: true
 *         description: Nhập mã dịch vụ
 *     responses:
 *       200:
 *         description: Tìm thành công
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/service'
 *       404:
 *         description: Server lỗi
 */


serviceRoutes.get('/get/:code_service', findServiceByCode)




/**
 * @swagger
 * /service/create:
 *   post:
 *     summary: Tạo dịch vụ mới 
 *     tags: [services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/service'
 *     responses:
 *       200:
 *         description: The service was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/service'
 *       500:
 *         description: Some server error
 */

serviceRoutes.post('/create', createService);




/**
 * @swagger
 * /service/edit/{code_service}:
 *  put:
 *    summary: Chỉnh sửa dịch vụ theo id
 *    tags: [services]
 *    parameters:
 *      - in: path
 *        name: code_service
 *        schema:
 *          type: string
 *        required: true
 *        description: Mã dịch vụ
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/service'
 *    responses:
 *      200:
 *        description: The service was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/service'
 *      404:
 *        description: The service was not found
 *      500:
 *        description: Some error happened
 */
serviceRoutes.put('/edit/:code_service', editService)






/**
 * @swagger
 * /service/delete/{code_service}:
 *   delete:
 *     summary: Xóa dịch vụ theo mã
 *     tags: [services]
 *     parameters:
 *       - in: path
 *         name: code_service
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
serviceRoutes.delete('/delete/:code_service', deleteService)





module.exports = {
    serviceRoutes
};
