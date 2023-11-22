


const express = require('express')
const { getSetting, updateSetting } = require('../controllers/setting.controller')

const settingRoutes  = express.Router()



/**
 * @swagger
 * components:
 *   schemas:
 *     setting:
 *       type: object
 *       required:
 *         - app_name
 *         - banner
 *       properties:
 *         app_name:
 *           type: string
 *           description: Tên app
 *         banner:
 *           type: string
 *           description: Bannewr
 *         facebook_url:
 *           type: string
 *           description: facebook
 *         email_contact:
 *           type: string
 *           description: email liên hệ
 *         phone_contact:
 *           type: string
 *           description: số điện thoại liên hệ
 *         description:
 *           type: string
 *           description: Mô tả cài đặt
 *       example:
 *         app_name: Spa neauty
 *         banner: /uploads/img/banner.jpg
 *         facebook_url: https://facebook.com/devhungtran
 *         email_contact: devhungtran@gmail.com
 *         phone_contact: 0333433969
 */


/**
 * @swagger
 * tags:
 *   name: settings
 *   description: API hệ thống
 */

/**
 * @swagger
 * /setting/data:
 *   get:
 *     summary: Trả về thông tin của ứng dụng
 *     tags: [settings] 
 *     responses:
 *       200:
 *         description: The list of settings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/setting'
 */

settingRoutes.get('/data', getSetting)





/**
 * @swagger
 * /setting/edit/:
 *   put:
 *     summary: Chỉnh sửa dịch vụ theo id
 *     tags: [settings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/setting'
 *     responses:
 *       200:
 *         description: The service was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/setting'
 *       404:
 *         description: The service was not found
 *       500:
 *         description: Some error happened
 */
settingRoutes.put('/edit', updateSetting)




module.exports = {
    settingRoutes
}
