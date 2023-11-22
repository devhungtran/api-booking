
const express = require('express')
const { manageAuth } = require('../controllers/manage.controller')

const manageRoutes  = express.Router()



/**
 * @swagger
 * components:
 *   schemas:
 *     manage:
 *       type: object
 *       required:
 *         - booking_code
 *         - booking_user
 *       properties:
 *         booking_code:
 *           type: string
 *           description: Mã booking
 *         booking_user:
 *           type: string
 *           description: Người đặt lịch
 *         code_service:
 *           type: string
 *           description: Mã đặt lịch dặt
 *         booking_time:
 *           type: date
 *           description: Thời gian
 *         booking_status:
 *           type: string
 *           description: Trạng thái đặt lịch
 *       example:
 *         booking_code: BKF821
 *         booking_user: zaloID
 *         code_service: TM001
 *         booking_time: 02/12/2023 
 *         booking_status: waiting
 */

/**
 * @swagger
 * tags:
 *   name: manage
 *   description: Quản lts
 * 
 *  */  



/**
 * @swagger
 * /manage/login:
 *   post:
 *     summary: Quản lý hệ th
 *     tags: [manage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                  type: string
 *                  require: true
 * 
 *     responses:
 *       200:
 *         description: The booking was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: The booking was not found
 *       500:
 *         description: Some error happened
 */
manageRoutes.post('/login', manageAuth)



module.exports = {
    manageRoutes
}
