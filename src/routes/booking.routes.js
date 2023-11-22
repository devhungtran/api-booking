
const express = require('express')
const { getAllBooking, cancelBooking, findBookingByStatus, findBookingByCode, createBooking } = require('../controllers/booking.controller')
const { findServiceByCode } = require('../controllers/service.controller')
const { authMDW } = require('../middlewares/authMDW')
const { checkAdmin } = require('../middlewares/admin.mdw')

const bookingRoutes  = express.Router()





/**
 * @swagger
 * components:
 *   schemas:
 *     bookings:
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
 *   name: bookings
 *   description: API của đặt lịch
 */

/**
 * @swagger
 * /booking/get:
 *   get:
 *     summary: Lấy lịch
 *     tags: [bookings]
 *     parameters:
 *      - in: header
 *        name: Authorized
 *        schema:
 *          type: string    
 *          required: true
 *     responses:
 *       200:
 *         description: The booking was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/booking'
 *       404:
 *         description: The booking was not found
 *       500:
 *         description: Some error happened
 */
bookingRoutes.get('/get', checkAdmin ,getAllBooking)

/**
 * @swagger
 * /booking/get/{booking_code}:
 *  get:
 *    summary: Tìm lịch theo mã
 *    tags: [bookings]
 *    parameters:
 *      - in: path
 *        name: booking_code
 *        schema:
 *          type: string
 *        required: true
 *        description: Mã lịch
 *    responses:
 *      200:
 *        description: The service was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/booking'
 *      404:
 *        description: The service was not found
 *      500:
 *        description: Some error happened  
 */

bookingRoutes.get('/get/:booking_code', findBookingByCode)







/**
 * @swagger
 * /booking/create:
 *   post:
 *     summary: Đặt lịch
 *     tags: [bookings]
 *     parameters:
 *      - in: header
 *        name: authorized
 *        schema:
 *          type: string    
 *          required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code_service:
 *                 type: string
 *                 required: true
 *               branch_code:
 *                  type: string
 *                  require: true
 *               booking_time:
 *                 type: string
 *                 format: datetime
 *                 required: true
 * 
 *     responses:
 *       200:
 *         description: The booking was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/booking'
 *       404:
 *         description: The booking was not found
 *       500:
 *         description: Some error happened
 */

bookingRoutes.post('/create', authMDW , createBooking)








/**
 * @swagger
 * /booking/cancel/{booking_code}:
 *  put:
 *    summary: Hủy lịch
 *    tags: [bookings]
 *    parameters:
 *      - in: path
 *        name: booking_code
 *        schema:
 *          type: string
 *        required: true
 *        description: Mã lịch
 *    responses:
 *      200:
 *        description: The booking was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/booking'
 *      404:
 *        description: The service was not found
 *      500:
 *        description: Some error happened
 */




bookingRoutes.put('/cancel/:booking_code', cancelBooking)

module.exports = {
    bookingRoutes
}
