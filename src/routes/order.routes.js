const express = require('express')
const { createOrder } = require('../controllers/order.controller')
const { authMDW } = require('../middlewares/authMDW')

const  orderRoutes  = express.Router()



/**
 * @swagger
 * components:
 *   schemas:
 *     service:
 *       type: object
 *       required:
 *         - order_code
 *         - service_order
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
 *   name: order
 *   description: API của dịch vụ
 */

/**
 * @swagger
 * /service/get-all:
 *   get:
 *     summary: Trả về tất cả dịch vụ
 *     tags: [order] 
 *     responses:
 *       200:
 *         description: The list of order
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/service'
 */


orderRoutes.post("/", authMDW ,createOrder)



module.exports = {
    orderRoutes
}